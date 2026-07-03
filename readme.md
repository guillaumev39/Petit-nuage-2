# Les Petits Moutons — Design System

**Les Petits Moutons** is a French maison of pillows for children (2–12 ans): three sizes — Le Petit, Le Moyen, Le Grand — in toile de Jouy and tender velvet, made in France. The positioning is **sober, premium, contemporary**, speaking to CSP+ parents. Sold in France, site is bilingual **FR (default) / EN**.

## Sources & provenance

- GitHub repo provided: https://github.com/guillaumev39/Petit-nuage-2 — **empty at build time**. Explore it if content has since been pushed.
- Real assets provided by the user: two product packshots (`assets/products/coussin-mouton.jpg`, `assets/products/coussin-moyen-toile.jpg`) and a 10s brand film (`assets/products/coussin-moutons.mp4`), from which two stills were extracted (`assets/lifestyle-crib.png` — used on the home page, `assets/detail-toile.png`).
- Everything else (palette, type, tone, components, boutique) was **created from scratch** to the user's brief: "sobre mais très premium", modern color code for CSP+ parents.
- The brand was previously "Petit Nuage" — renamed by the user to **Les Petits Moutons**. (Component namespace still reads PetitNuageDesignSystem_f04838; cosmetic only.)
- No logo provided, none invented — wordmark is the brand name in type. No brand fonts — Google substitutes **Cormorant Garamond** (display) + **Hanken Grotesk** (body), flagged for replacement.

## Products represented

- **Boutique** (`ui_kits/boutique/`) — the bilingual e-commerce site: home, product page, « La maison » (story) and « Le guide du sommeil » (editorial). 3 products: Le Petit (30×40, 2–4 ans, 25 €), Le Moyen (40×60, 5–8 ans, 34 €, toile de Jouy), Le Grand (50×70, 9–12 ans, 40 €, **no photo yet — provisional visual flagged**). Tweaks: hero variant (packshot / lifestyle photo / film autoplay), fanions on/off. Motion is deliberately near-static — discreet hovers only, no scroll animations.

## CONTENT FUNDAMENTALS

- **Language**: French first; full English mirror. Never mix languages in one surface.
- **Address**: `vous`, calm and assured. The brand says « la maison », « nos ateliers ».
- **Casing**: sentence case everywhere, buttons included (« Ajouter au panier »). Uppercase reserved for the wordmark, eyebrows and badges (letterspaced 0.14em).
- **Tone**: sober, precise, quietly poetic. Heritage vocabulary: *toile de Jouy, bergerie, façonné, ateliers, matière*. Reassuring facts (washability, materials, made in France) over superlatives. **No urgency, no exclamation marks in selling copy, no discounts-shouting, no emoji, no franglais.**
- **Product naming**: sizes are names — Le Petit / Le Moyen / Le Grand (The Small / The Medium / The Large). Fabrics have maison names in guillemets: velours « Mouton rêveur », toile « Bergerie ».
- **Examples**:
  - Hero: « De belles nuits, dès ce soir » / "Beautiful nights, starting tonight"
  - Reassurance: « Toile de Jouy tissée en France · Coton bio certifié · Façonné à la main · Retours offerts 30 jours »
  - Toast: « Ajouté au panier » (calm, no !)
  - Empty cart: « Votre panier est vide, pour l'instant. »

## VISUAL FOUNDATIONS

- **Palette**: ivory paper neutrals (`--lpm-ivory-*`, page #FAF7F0 — never pure white pages) + warm ink text (`--lpm-ink-*`) + **bleu de Jouy** accent (`--lpm-jouy-*`, from the toile print — buttons, links, inverse sections in jouy-900). Wool écru (`--lpm-wool-*`) for soft bands; the pillow flags (rose/straw/sage) exist as **micro-accents only** (badges, tiny details) — the chrome stays sober, the products bring the color.
- **Type**: Cormorant Garamond for display — 500/600, never heavy, tight 1.08 leading, sentence case; sizes run large (54–72px heroes). Hanken Grotesk for body/UI — 400–600, 1.65 leading. Eyebrows: 12px caps, 0.14em tracking. Wordmark: Cormorant 600 caps, 0.18em.
- **Spacing**: 4px scale, generous whitespace (sections 72–96px). Max container 1160px.
- **Corners**: restrained — 4/8/12/18px; **pill shape reserved for buttons** and the toggle. Nothing bubbly.
- **Backgrounds**: flat ivory planes; white (#fff) grounds behind packshots; one deep jouy-900 inverse band per page max. No gradients, no textures, no pattern fills — the toile print is the only pattern and it lives in photography.
- **Shadows**: barely-there, warm-tinted doubles (`--shadow-card`, `--shadow-lift`); quiet cards may use hairline border and no shadow at all.
- **Borders**: hairline `--border-soft` (#E8E0CF); tables and galleries rely on hairlines, not shadows.
- **Motion**: calm — 150–450ms, `--ease-drift` ease-out; hover lift 3px max; fades, never bounces, no loops.
- **Hover**: buttons darken (jouy-700 → 900); quiet elements get wool/ivory tint; cards lift 3px.
- **Press**: rest position, slightly darker. **Focus**: 3px pale-jouy ring, always visible.
- **Transparency/blur**: header only (`rgba(250,247,240,0.94)` + 6px blur). Dialog scrim `rgba(35,33,28,0.4)`, no blur.
- **Imagery**: real packshots on white, warm natural-light lifestyle stills from the film (cream/blue nursery). Never cool, never high-contrast. Provisional visuals are labelled « visuel provisoire ».
- **Cards**: `--surface-card` (#FFFEFB), radius 12px, hairline border or `--shadow-card`, padding 18–24px.

## ICONOGRAPHY

- No icon set was provided. Line icons are drawn at **1.75px stroke, round caps** (Lucide-compatible geometry — bag, arrows, close, chevron are inlined in components/kit; the **Lucide** CDN is the approved fallback for new glyphs — a substitution, flag it).
- Icons stay small (14–20px), `currentColor`, muted. The brand prefers **words over icons** — reassurance items are plain text, not icon rows.
- No icon font, no emoji, no unicode-as-icons. No logo asset — use the type wordmark.

## Index

- `styles.css` — global entry; imports everything under `tokens/`.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `guidelines/` — 14 specimen cards (Colors ×4, Type ×3, Spacing ×3, Brand ×4).
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch.
- `components/display/` — Card, Badge, Tag, Tabs.
- `components/feedback/` — Dialog, Toast, Tooltip.
- `ui_kits/boutique/` — bilingual e-commerce site (`index.html`).
- `assets/` — product photos, film stills, brand film mp4.
- `SKILL.md` — agent skill entry point.

### Intentional additions
None — the standard component set was authored because no source defined an inventory.
