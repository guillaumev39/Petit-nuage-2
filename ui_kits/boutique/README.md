# UI kit — Boutique Les Petits Moutons

Bilingual (FR/EN) e-commerce site: home (hero ×3 variants via Tweaks, 3 pillows, lifestyle band, size guide, story band), product detail, « La maison » story page, « Le guide du sommeil » editorial page, cart dialog + toast. Language toggle in the header, persisted in localStorage. Motion: near-static by choice (discreet hovers only).

Products (real photos in `assets/products/`):
- **Le Petit / The Small** — 30 × 40 cm, 2–4 ans, 25 € — velours « Mouton rêveur » (`coussin-mouton.jpg`)
- **Le Moyen / The Medium** — 40 × 60 cm, 5–8 ans, 34 € — toile de Jouy « Bergerie » (`coussin-moyen-toile.jpg`)
- **Le Grand / The Large** — 50 × 70 cm, 9–12 ans, 40 € — **no dedicated photo yet**; uses a film close-up flagged "visuel provisoire"

`assets/lifestyle-crib.png` (still from `coussin-moutons.mp4`) illustrates the home lifestyle band.

- `index.html` — entry, lang + routing + cart + Tweaks (hero variant, fanions)
- `Chrome.jsx` — Wordmark, Header (FR/EN, nav), ReassuranceBar, Footer, ProductPhoto, Fanions
- `Home.jsx`, `Product.jsx`, `Editorial.jsx` — screens
- `data.js` — catalogue + all FR/EN strings
- `tweaks-panel.jsx` — Tweaks shell (starter component)
