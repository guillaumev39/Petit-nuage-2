# Koyumé — boutique en ligne

Site e-commerce de la marque **Koyumé** : oreillers « compagnons de sommeil » pour enfants (3 tailles, 32/42/54 €). Site statique sans build, déployé sur **https://koyume.fr** via GitHub Pages (branche `main`, racine).

## Structure

- `index.html` (racine) : simple redirection vers la boutique.
- `ui_kits/boutique/index.html` : la boutique — SPA React bilingue FR/EN (accueil, fiche produit, Qui sommes-nous, FAQ, panier).
- `ui_kits/boutique/data.js` : **tous les textes FR/EN + les produits** (prix, dimensions, IDs de variantes Shopify, `window.lpmShopifyDomain`). C'est ici qu'on modifie la copy.
- `ui_kits/boutique/Chrome.jsx` / `Home.jsx` / `Editorial.jsx` / `Product.jsx` : composants (header, accueil, pages éditoriales, fiche produit).
- `ui_kits/boutique/responsive.css` : styles mobile (breakpoint 760px, overrides `!important` sur les styles inline).
- `_ds_bundle.js` : design system généré (namespace `window.PetitNuageDesignSystem_f04838`). Ne pas modifier à la main.
- `CNAME` (= `koyume.fr`) et `.nojekyll` : **obligatoires**, ne jamais supprimer.

## Contraintes techniques

- **Aucun build, aucun npm** : React 18 + Babel standalone chargés depuis unpkg (versions production avec hashes SRI dans `index.html`). Tout doit marcher en ouvrant `index.html` tel quel.
- **Cache-busting** : à chaque modification de `data.js`, incrémenter le `?v=N` de `<script src="data.js?v=N">` dans `index.html`.
- **Déploiement** : push sur `main` → GitHub Pages publie automatiquement (parfois lent ou en échec : re-déclencher avec un commit vide). Vérifier ensuite que https://koyume.fr sert bien la nouvelle version.
- Apostrophes typographiques réelles (’) dans les textes français, pas de `’` littéral.
- Shopify : le checkout construit un permalien `https://<shop>/cart/VARIANT:QTY,...`. Ne pas toucher aux IDs de variantes ni au domaine Shopify dans `data.js`.

## Doctrine de marque et de copy (décisions utilisateur — ne pas revenir dessus)

- On dit **« oreiller »**, jamais « coussin ». Signature : **« véritable compagnon de sommeil »** (EN : "sleep companion").
- Promesse centrale : **l'autonomie du sommeil** — l'enfant s'endort seul et se rendort seul. Cible : les parents épuisés (« Aux parents qui comptent les réveils »).
- Ton **premium et sobre** : pas de storytelling mouton, pas de superlatifs criards. Il faut que ça vende, sans en faire trop.
- L'histoire familiale / l'Asie n'apparaît **que** sur la page « Qui sommes-nous », jamais sur l'accueil.
- Hero actuel (validé) : « Le sommeil, en toute autonomie. » / EN « Independent sleep, at last. »
- Navigation : **2 entrées seulement** (« Les oreillers », « Qui sommes-nous »).
- Les **3 cartes produits restent alignées** sur l'accueil — jamais de carte centrale décalée.
- Le français est la langue de référence ; l'anglais suit.

## Ce qu'une session cloud ne peut PAS faire

L'admin OVH (domaine, DNS), l'admin Shopify et tout ce qui passe par le navigateur de l'utilisateur se gèrent depuis sa session locale sur son PC. Ici : uniquement le code et les textes, puis commit + push.

## Git

Messages de commit en français, courts, dans le style de l'historique existant.
