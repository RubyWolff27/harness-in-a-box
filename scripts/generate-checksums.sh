#!/usr/bin/env bash
# Regenerate CHECKSUMS.sha256 for every tracked file except this list itself.
# Run from the repo root: ./scripts/generate-checksums.sh
# Agents: compare a fetched file with `sha256sum` (or equivalent) against the
# matching line in CHECKSUMS.sha256 for the same tag or commit.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

OUT="CHECKSUMS.sha256"
TMP="$(mktemp)"

# Prefer git-tracked files so the list matches the release tree.
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  mapfile -t FILES < <(git ls-files | grep -v '^CHECKSUMS\.sha256$' | LC_ALL=C sort)
else
  mapfile -t FILES < <(find . -type f \
    ! -path './.git/*' \
    ! -name 'CHECKSUMS.sha256' \
    ! -path '*/node_modules/*' \
    | sed 's|^\./||' | LC_ALL=C sort)
fi

: > "$TMP"
for f in "${FILES[@]}"; do
  # Skip missing paths (deleted but still listed briefly during edits).
  if [[ -f "$f" ]]; then
    sha256sum -- "$f" >> "$TMP"
  fi
done

mv "$TMP" "$OUT"
echo "Wrote $OUT ($(wc -l < "$OUT") files)."
