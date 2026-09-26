# Koyumé — boutique en ligne

Site e-commerce de la marque **Koyumé** : oreillers « compagnons de sommeil » pour enfants (3 tailles, 32/42/54 € — prix provisoires, pas encore décidés). Le site est encore une maquette : rien n'est vendu pour l'instant. Site statique sans build, déployé sur **https://koyume.fr** via GitHub Pages (branche `main`, racine).

## Structure

- `index.html` (racine) : simple redirection vers la boutique.
- `ui_kits/boutique/index.html` : la boutique — SPA React bilingue FR/EN (accueil, fiche produit, Qui sommes-nous, FAQ, panier). Chaque écran a son adresse dans le hash (`#/oreiller/moyen`, `#/qui-sommes-nous`, `#/questions`) pour que le bouton retour et les liens partagés marchent ; le panier est conservé dans `localStorage` (`lpm-cart`).
- `ui_kits/boutique/data.js` : **tous les textes FR/EN + les produits** (prix, dimensions, âges, galerie photo propre à chaque produit, IDs de variantes Shopify, `window.lpmShopifyDomain`). C'est ici qu'on modifie la copy.
- `ui_kits/boutique/Chrome.jsx` / `Home.jsx` / `Editorial.jsx` / `Product.jsx` : composants (header, accueil, pages éditoriales, fiche produit).
- `ui_kits/boutique/responsive.css` : styles mobile (breakpoint 760px, overrides `!important` sur les styles inline).
- `_ds_bundle.js` : design system généré (namespace `window.PetitNuageDesignSystem_f04838`). Ne pas modifier à la main.
- `CNAME` (= `koyume.fr`) et `.nojekyll` : **obligatoires**, ne jamais supprimer.

## Contraintes techniques

- **Aucun build, aucun npm** : React 18 + Babel standalone chargés depuis unpkg (versions production avec hashes SRI dans `index.html`). Tout doit marcher en ouvrant `index.html` tel quel.
- **Cache-busting** : à chaque modification de `data.js`, incrémenter le `?v=N` de `<script src="data.js?v=N">` dans `index.html`.
- **Déploiement** : push sur `main` → GitHub Pages publie automatiquement (parfois lent ou en échec : re-déclencher avec un commit vide). Vérifier ensuite que https://koyume.fr sert bien la nouvelle version (depuis une session cloud, koyume.fr est bloqué par le réseau : vérifier le run « pages build and deployment » dans GitHub Actions et demander à l'utilisateur de regarder le site).
- **Aperçu avant mise en ligne** : l'utilisateur veut voir avant tout push sur `main`. En session cloud, unpkg est bloqué mais le registre npm ne l'est pas : on sert le dépôt en local, on fournit React/Babel depuis leurs paquets npm (hashes SRI identiques) et on fait des captures avec Playwright.
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
- **Âges : gamme à partir de 2 ans** — Le Petit 2–3 ans (premier grand lit), Le Moyen 3–5 ans, Le Grand dès 5 ans. Recommandations officielles de couchage : rien dans le lit de bébé. Aucun texte ne doit suggérer un usage avant 2 ans. Les deux vidéos d'accueil (dont celle de l'oreiller dans un lit à barreaux) restent tant que le site est une maquette (décision utilisateur) ; à revoir avec les vrais visuels avant le lancement.
- **Allégations : uniquement ce qui est vrai.** Fabriqué en Chine par un fournisseur premium, dessiné par le couple fondateur → « Dessiné par nos soins » / "Designed in-house". Jamais « Dessiné en France », « nos ateliers », ni OEKO-TEX sans certificat. Pas de faux avis ni de « Le plus choisi » : témoignages et badges seulement quand ils sont réels.
- **Site : on garde ce site sur mesure, connecté à Shopify pour le paiement** (décision utilisateur, pas de migration vers un thème Shopify).
- Contact public : **contact@koyume.fr** (redirection OVH vers la boîte perso). Jamais l'adresse Gmail perso sur le site.

## Ce qu'une session cloud ne peut PAS faire

L'admin OVH (domaine, DNS) et tout ce qui passe par le navigateur de l'utilisateur se gèrent depuis sa session locale sur son PC. Un connecteur Shopify peut être branché sur la session cloud : lecture libre, mais aucune modification de la boutique sans l'accord explicite de l'utilisateur. Sinon : le code et les textes, puis commit + push.

## Git

Messages de commit en français, courts, dans le style de l'historique existant.
