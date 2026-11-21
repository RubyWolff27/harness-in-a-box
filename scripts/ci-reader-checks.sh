#!/usr/bin/env bash
# Reader-path CI: checksums, no en/em dashes, relative links resolve.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail=0

echo "== checksums =="
if [[ ! -f CHECKSUMS.sha256 ]]; then
  echo "FAIL: CHECKSUMS.sha256 missing"
  exit 1
fi
if ! sha256sum -c CHECKSUMS.sha256; then
  echo "FAIL: checksum mismatch against working tree"
  fail=1
else
  echo "OK: checksums match"
fi
# Also ensure the generator would not change the file
TMP="$(mktemp)"
cp CHECKSUMS.sha256 "$TMP"
./scripts/generate-checksums.sh >/dev/null
if ! cmp -s "$TMP" CHECKSUMS.sha256; then
  echo "FAIL: CHECKSUMS.sha256 is stale; run ./scripts/generate-checksums.sh"
  diff -u "$TMP" CHECKSUMS.sha256 | head -40 || true
  # restore committed view for later steps
  mv "$TMP" CHECKSUMS.sha256
  fail=1
else
  rm -f "$TMP"
  echo "OK: CHECKSUMS.sha256 is up to date with generator"
fi

echo "== no en/em dashes on reader path =="
mapfile -t READER < <(
  printf '%s\n' \
    AGENTS.md README.md CHOOSER.md STANDARD.md VERSION CHANGELOG.md \
    lanes/LITE.md plan/FIRST-7-DAYS.md plan/SETUP-SPRINT.md \
    checks/SELF-CHECK.md checks/fixtures/README.md \
    checks/fixtures/sample-email.txt checks/fixtures/sample-web-note.txt \
    core/skills/daily-plan/SKILL.md core/skills/capture/SKILL.md \
    core/skills/weekly-review/SKILL.md core/memory/SCHEMA-v2.md \
    core/export/HARNESS-EXPORT.md core/export/SEED.txt core/autonomy-ladder.md
  find archetypes -type f \( -name '*.md' -o -name '*.txt' \) | LC_ALL=C sort
  find paths -type f -name '*.md' | LC_ALL=C sort
)
dash_hits=0
for f in "${READER[@]}"; do
  [[ -f "$f" ]] || { echo "FAIL: missing reader file $f"; fail=1; continue; }
  if python3 -c "import sys; t=open(sys.argv[1],encoding='utf-8').read(); sys.exit(0 if ('\u2013' in t or '\u2014' in t) else 1)" "$f"; then
    echo "FAIL: en/em dash in $f"
    python3 -c "import sys; t=open(sys.argv[1],encoding='utf-8').read();
[print(f'{i}: {line!r}') for i,line in enumerate(t.splitlines(),1) if '\u2013' in line or '\u2014' in line]" "$f"
    dash_hits=$((dash_hits+1))
    fail=1
  fi
done
if [[ $dash_hits -eq 0 ]]; then
  echo "OK: no en/em dashes in reader path (${#READER[@]} files)"
fi

echo "== relative links =="
set +e
python3 - <<'PY'
import re, sys
from pathlib import Path

roots = [
  Path('AGENTS.md'), Path('README.md'), Path('CHOOSER.md'), Path('STANDARD.md'),
  Path('lanes/LITE.md'), Path('plan/FIRST-7-DAYS.md'), Path('plan/SETUP-SPRINT.md'),
  Path('checks/SELF-CHECK.md'),
  Path('core/skills/daily-plan/SKILL.md'), Path('core/skills/capture/SKILL.md'),
  Path('core/skills/weekly-review/SKILL.md'), Path('core/memory/SCHEMA-v2.md'),
  Path('core/export/HARNESS-EXPORT.md'), Path('core/autonomy-ladder.md'),
]
roots += sorted(Path('archetypes').rglob('*.md'))
roots += sorted(Path('paths').glob('*.md'))

link_re = re.compile(r'\[([^\]]*)\]\(([^)]+)\)')
bad = []
for src in roots:
  if not src.exists():
    bad.append(f'missing {src}')
    continue
  text = src.read_text(encoding='utf-8')
  for m in link_re.finditer(text):
    url = m.group(2).strip()
    if url.startswith(('http://', 'https://', 'mailto:', '#')):
      continue
    path_part = url.split()[0].split('#')[0]
    if not path_part or '<' in path_part or path_part.startswith('{'):
      continue
    target = (src.parent / path_part).resolve()
    try:
      target.relative_to(Path('.').resolve())
    except ValueError:
      bad.append(f'{src}: escapes repo ({url})')
      continue
    if not target.exists():
      bad.append(f'{src}: broken relative link -> {url}')

if bad:
  print('FAIL:')
  for b in bad:
    print(' ', b)
  sys.exit(1)
print(f'OK: relative links in {len(roots)} files')
PY
link_rc=$?
set -e
if [[ $link_rc -ne 0 ]]; then fail=1; fi

if [[ $fail -ne 0 ]]; then
  echo "CI reader checks FAILED"
  exit 1
fi
echo "CI reader checks PASSED"
