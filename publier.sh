#!/bin/sh
# Choisit ce que koyume.fr affiche. GitHub Pages publie la branche gh-pages (pas main) :
#   ./publier.sh bientot   la page « bientôt » seule (dossier bientot/) — l'état normal
#   ./publier.sh site      le vrai site tel qu'il est sur main, pour une démo — à recacher ensuite
# Le vrai site se développe toujours sur main ; ce script ne touche jamais à main.
set -e
mode=${1:-bientot}
case "$mode" in bientot|site) ;; *) echo "usage : ./publier.sh [bientot|site]" >&2; exit 1 ;; esac

root=$(git rev-parse --show-toplevel)
cd "$root"
git fetch -q origin main
wt=$(mktemp -d)
git worktree add -q --detach "$wt" origin/main
cleanup() { cd "$root"; git worktree remove --force "$wt" 2>/dev/null || true; git branch -D publication >/dev/null 2>&1 || true; }
trap cleanup EXIT

cd "$wt"
git checkout -q --orphan publication
git rm -rq --cached . >/dev/null
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
if [ "$mode" = bientot ]; then
  git -C "$root" archive origin/main bientot | tar -x --strip-components=1
else
  git -C "$root" archive origin/main | tar -x
  rm -rf bientot CLAUDE.md publier.sh
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
echo "koyume.fr -> $mode (en ligne d'ici une minute ; cache navigateur jusqu'à 10 min)"
