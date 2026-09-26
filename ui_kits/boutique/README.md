# Boutique Koyumé

Site bilingue FR/EN (SPA React, sans build) : accueil (hero vidéo, 3 oreillers, guide des tailles, promesse), fiche produit, Qui sommes-nous, FAQ, panier relié au checkout Shopify. Chaque écran a son adresse dans le hash (`#/oreiller/moyen`, `#/qui-sommes-nous`, `#/questions/livraison`).

- `index.html` — point d'entrée : routes, langue, panier (conservé dans `localStorage`), lien vers Shopify.
- `data.js` — produits (prix en chiffres, âges, galeries, variantes Shopify) et tous les textes FR/EN. La typographie française (espaces insécables) y est appliquée automatiquement.
- `Chrome.jsx` — logo, en-tête, bandeaux, pied de page, photo produit.
- `Home.jsx`, `Product.jsx`, `Editorial.jsx` — accueil, fiche produit, Qui sommes-nous + FAQ.
- `responsive.css` — adaptations mobile (≤ 760 px).

La gamme, les âges, les prix et les règles de copy font foi dans `CLAUDE.md` à la racine du dépôt.
