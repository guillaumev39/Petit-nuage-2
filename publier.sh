#!/bin/sh
# Choisit ce que koyume.fr affiche. GitHub Pages publie la branche gh-pages (pas main) :
#   ./publier.sh               page « bientôt » pour le public + vrai site à une adresse secrète (état normal)
#   ./publier.sh bientot       page « bientôt » seule : vrai site hors ligne, adresse secrète désactivée
#   ./publier.sh nouveau-lien  état normal avec une nouvelle adresse secrète (si l'ancienne a circulé)
# Le vrai site se développe sur main ; ce script ne touche jamais à main.
# L'adresse secrète n'est écrite nulle part dans main : c'est le nom du dossier
# (16 caractères hexadécimaux) publié dans gh-pages, réutilisé d'une publication à l'autre.
set -e
mode=${1:-prive}
case "$mode" in prive|bientot|nouveau-lien) ;; *) echo "usage : ./publier.sh [bientot|nouveau-lien]" >&2; exit 1 ;; esac

root=$(git rev-parse --show-toplevel)
cd "$root"
git fetch -q origin main
secret=""
if [ "$mode" = prive ] && git fetch -q origin gh-pages 2>/dev/null; then
  secret=$(git ls-tree -d --name-only origin/gh-pages | grep -E '^[0-9a-f]{16}$' | head -n 1 || true)
fi
if [ "$mode" != bientot ] && [ -z "$secret" ]; then
  secret=$(od -An -N8 -tx1 /dev/urandom | tr -d ' \n')
fi

wt=$(mktemp -d)
git worktree add -q --detach "$wt" origin/main
cleanup() { cd "$root"; git worktree remove --force "$wt" 2>/dev/null || true; git branch -D publication >/dev/null 2>&1 || true; }
trap cleanup EXIT

cd "$wt"
git checkout -q --orphan publication
git rm -rq --cached . >/dev/null
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
git -C "$root" archive origin/main bientot | tar -x --strip-components=1
if [ -n "$secret" ]; then
  mkdir "$secret"
  git -C "$root" archive origin/main | tar -x -C "$secret"
  rm -rf "$secret/bientot" "$secret/CLAUDE.md" "$secret/publier.sh" "$secret/CNAME" "$secret/.nojekyll"
  # Jamais référencé par les moteurs de recherche.
  for f in "$secret/index.html" "$secret/ui_kits/boutique/index.html"; do
    awk '{ print } /<head>/ && !done { print "<meta name=\"robots\" content=\"noindex, nofollow\">"; done = 1 }' "$f" > "$f.tmp" && mv "$f.tmp" "$f"
  done
fi
git -C "$root" show origin/main:CNAME > CNAME
touch .nojekyll
git add -A
# PUBLIER_TRAILER (facultatif) : lignes d'attribution à ajouter au message de commit.
if [ -n "$PUBLIER_TRAILER" ]; then
  git commit -q -m "Publication koyume.fr : $mode" -m "$PUBLIER_TRAILER"
else
  git commit -q -m "Publication koyume.fr : $mode"
fi
git push -q -f origin HEAD:gh-pages
if [ -n "$secret" ]; then
  echo "Public : page « bientôt ». Vrai site : https://koyume.fr/$secret/"
else
  echo "Public : page « bientôt ». Vrai site hors ligne."
fi
