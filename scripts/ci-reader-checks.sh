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

echo "== (a) no paths/<name>.md refs outside paths/ =="
set +e
python3 - <<'PY'
import re, sys
from pathlib import Path

pat = re.compile(r'paths/[A-Za-z0-9_-]+\.md')
skip_names = {'CHECKSUMS.sha256'}
skip_dirs = {'.git', 'node_modules'}
bad = []
for p in Path('.').rglob('*'):
  if not p.is_file():
    continue
  if any(part in skip_dirs for part in p.parts):
    continue
  if p.parts[0] == 'paths':
    continue
  if p.name in skip_names:
    continue
  try:
    text = p.read_text(encoding='utf-8')
  except (UnicodeDecodeError, OSError):
    continue
  for m in pat.finditer(text):
    # line number
    line = text.count('\n', 0, m.start()) + 1
    bad.append(f'{p}:{line}: {m.group(0)}')

if bad:
  print('FAIL: paths/<name>.md referenced outside paths/:')
  for b in bad:
    print(' ', b)
  sys.exit(1)
print('OK: no paths/<name>.md refs outside paths/')
PY
paths_rc=$?
set -e
if [[ $paths_rc -ne 0 ]]; then fail=1; fi

echo "== (a2) no bare guide filenames that do not resolve =="
set +e
python3 - <<'PY'
import re, sys
from pathlib import Path

# Uppercase guide basenames from the old paths-folder era. A bare guide
# filename (for example GROK plus BOT dot md) does not resolve from most
# directories; require a path prefix that exists.
NAMES = (
  'GROK-BOT', 'CHATGPT-DOTS', 'CHATGPT', 'CLAUDE', 'MUSE', 'GEMINI',
  'MESSAGING-NATIVE', 'UNKNOWN-AGENT',
)
# Match basename.md not immediately preceded by /
pat = re.compile(r'(?<![/])\b(' + '|'.join(NAMES) + r')\.md\b')
skip_names = {'CHECKSUMS.sha256', 'ci-reader-checks.sh'}
skip_dirs = {'.git', 'node_modules'}
bad = []
for p in Path('.').rglob('*'):
  if not p.is_file():
    continue
  if any(part in skip_dirs for part in p.parts):
    continue
  if p.name in skip_names:
    continue
  if p.suffix.lower() not in {'.md', '.txt', '.yml', '.yaml', '.sh'}:
    continue
  try:
    text = p.read_text(encoding='utf-8')
  except (UnicodeDecodeError, OSError):
    continue
  for i, line in enumerate(text.splitlines(), 1):
    for m in pat.finditer(line):
      name = m.group(0)
      # If the match sits inside a longer path token ending at name, check resolve
      # Look left for the start of the path token
      left = line[:m.start()]
      # token may be in backticks or markdown link
      token_start = max(left.rfind('`'), left.rfind('('), left.rfind(' '), left.rfind('['))
      token_prefix = left[token_start + 1:] if token_start >= 0 else left
      # If prefix contains a path separator, try resolving relative to this file
      if '/' in token_prefix or token_prefix.endswith('.'):
        # rebuild candidate path: from last whitespace-ish
        cand = (token_prefix + name).strip('`"\'()[]')
        target = (p.parent / cand).resolve()
        try:
          target.relative_to(Path('.').resolve())
        except ValueError:
          bad.append(f'{p}:{i}: {name} (escapes repo via {cand})')
          continue
        if target.exists():
          continue
        bad.append(f'{p}:{i}: {name} (path {cand} does not resolve)')
        continue
      # Bare name: resolves only if file exists next to this file
      if (p.parent / name).exists():
        continue
      bad.append(f'{p}:{i}: bare {name} does not resolve from {p.parent}/')

# Regression: the pre-v3.0.2 MEMORY-LAYERS bare pointer must keep failing the pattern
old = 'see "Prefer Obsidian?" in `GROK-BOT.md`.'
if not pat.search(old):
  print('FAIL: regression pattern no longer catches bare GROK-BOT.md')
  sys.exit(1)
fixed = 'see "Prefer Obsidian?" in `archetypes/overlays/grok-bot.md`.'
if pat.search(fixed):
  print('FAIL: regression pattern falsely flags overlay path')
  sys.exit(1)

if bad:
  print('FAIL: bare guide filenames that do not resolve:')
  for b in bad:
    print(' ', b)
  sys.exit(1)
print('OK: no unresolved bare guide filenames (regression on old bare line holds)')
PY
bare_rc=$?
set -e
if [[ $bare_rc -ne 0 ]]; then fail=1; fi

echo "== (b) tag pin matches VERSION; no stale commit SHA pin =="
set +e
python3 - <<'PY'
import re, sys
from pathlib import Path

version = Path('VERSION').read_text(encoding='utf-8').strip()
if not re.fullmatch(r'\d+\.\d+\.\d+', version):
  print(f'FAIL: VERSION looks wrong: {version!r}')
  sys.exit(1)
tag = f'v{version}'

files = [Path('README.md'), Path('AGENTS.md')]
sha_pin = re.compile(r'commit\s+`?[0-9a-f]{7,40}`?', re.I)
sha_bare = re.compile(r'\(commit\s+[0-9a-f]{7,40}\)', re.I)
tag_re = re.compile(r'v\d+\.\d+\.\d+')

bad = []
for path in files:
  text = path.read_text(encoding='utf-8')
  if tag not in text:
    bad.append(f'{path}: missing pin tag {tag}')
  # Any other release tag that is not this version (ignore changelog-style history in AGENTS? AGENTS should only have current)
  for m in tag_re.finditer(text):
    if m.group(0) != tag:
      # allow mentioning older tags only in CHANGELOG; README/AGENTS must be current-only
      bad.append(f'{path}: stale or extra tag {m.group(0)} (want {tag} only)')
  if sha_pin.search(text) or sha_bare.search(text):
    bad.append(f'{path}: commit SHA pin still present; use tag-only pin')

# Setup links must open this tag
for path in files:
  text = path.read_text(encoding='utf-8')
  for needle in (
    f'tree/{tag}',
    f'raw.githubusercontent.com/RubyWolff27/harness-in-a-box/{tag}/',
    f'tags/{tag}.zip',
  ):
    if needle not in text and path.name == 'README.md':
      # README must have tree and raw; zip optional if "goes wrong" section has it
      if 'tree/' in needle or 'raw.githubusercontent' in needle:
        if needle not in text:
          bad.append(f'{path}: missing setup link fragment {needle}')
    if path.name == 'AGENTS.md' and 'raw.githubusercontent' in needle and needle not in text:
      bad.append(f'{path}: missing raw base {needle}')

if bad:
  # de-dupe
  seen = []
  for b in bad:
    if b not in seen:
      seen.append(b)
  print('FAIL:')
  for b in seen:
    print(' ', b)
  sys.exit(1)
print(f'OK: pin is tag-only {tag} matching VERSION={version}')
PY
pin_rc=$?
set -e
if [[ $pin_rc -ne 0 ]]; then fail=1; fi

if [[ $fail -ne 0 ]]; then
  echo "CI reader checks FAILED"
  exit 1
fi
echo "CI reader checks PASSED"
