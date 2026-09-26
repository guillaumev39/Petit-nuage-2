// Vérifie la boutique dans un vrai navigateur (Playwright) et fait des captures.
//   node outils/verifier.mjs                         la version de travail (dépôt, JSX + Babel)
//   node outils/verifier.mjs <dossier> [chemin]      un autre dossier, ex. la copie publiée :
//        node outils/verifier.mjs /tmp/gh-pages /<dossier-secret>/ui_kits/boutique/index.html
//   --captures <dossier>                             enregistre des captures mobile et ordinateur
// Sans réseau vers unpkg (sessions cloud), React et Babel viennent de leurs paquets npm :
// ce sont les mêmes fichiers, les hashes SRI de index.html restent valides.
import { createRequire } from 'module';
import { execFileSync, execSync } from 'child_process';
import fs from 'fs';
import http from 'http';
import os from 'os';
import path from 'path';

const args = process.argv.slice(2);
const capIndex = args.indexOf('--captures');
const captures = capIndex >= 0 ? args.splice(capIndex, 2)[1] : null;
const repo = path.resolve(new URL('..', import.meta.url).pathname);
const dir = path.resolve(args[0] || repo);
const basePath = args[1] || '/ui_kits/boutique/index.html';

const require = createRequire(path.join(execSync('npm root -g').toString().trim(), 'noop.js'));
const { chromium } = require('playwright');

// React / ReactDOM / Babel, tels que index.html les demande à unpkg.
const cache = path.join(os.tmpdir(), 'koyume-cdn');
const packages = { 'react@18.3.1': 'umd/react.production.min.js', 'react-dom@18.3.1': 'umd/react-dom.production.min.js', '@babel/standalone@7.29.0': 'babel.min.js' };
const cdn = {};
for (const [pkg, file] of Object.entries(packages)) {
  const target = path.join(cache, pkg.replace('/', '_'));
  if (!fs.existsSync(path.join(target, 'package', file))) {
    fs.mkdirSync(target, { recursive: true });
    const tgz = execFileSync('npm', ['pack', '--silent', pkg], { cwd: target }).toString().trim().split('\n').pop();
    execFileSync('tar', ['-xzf', tgz], { cwd: target });
  }
  cdn[`https://unpkg.com/${pkg}/${file}`] = path.join(target, 'package', file);
}

const types = { '.html': 'text/html', '.js': 'text/javascript', '.jsx': 'text/babel', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4' };
const server = http.createServer((req, res) => {
  const file = path.join(dir, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(file, (err, body) => {
    if (err) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  });
}).listen(0);
const base = `http://localhost:${server.address().port}${basePath}`;

const browser = await chromium.launch();
async function openPage(mobile) {
  const context = await browser.newContext(mobile ? { viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 2 } : { viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.route('https://unpkg.com/**', (r) => (cdn[r.request().url()] ? r.fulfill({ status: 200, contentType: 'text/javascript', body: fs.readFileSync(cdn[r.request().url()]) }) : r.abort()));
  // Polices Google : Chromium ne passe pas par le proxy des sessions cloud, curl si.
  await page.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/, (r) => {
    try { return r.fulfill({ status: 200, body: execFileSync('curl', ['-sS', '-m', '20', '-A', r.request().headers()['user-agent'], r.request().url()]) }); } catch { return r.abort(); }
  });
  await page.route('https://*.myshopify.com/**', (r) => r.fulfill({ status: 200, contentType: 'text/html', body: 'shopify' }));
  return { page, errors, context };
}
const results = [];
const check = (name, ok, detail = '') => results.push(`${ok ? 'OK   ' : 'ÉCHEC'} ${name}${detail ? ' — ' + detail : ''}`);
const badge = (page) => page.evaluate(() => { const b = [...document.querySelectorAll('header span')].find((s) => /^\d+$/.test(s.textContent.trim())); return b ? +b.textContent : 0; });
const text = (page) => page.evaluate(() => document.body.innerText);

// --- Parcours sur ordinateur
{
  const { page, errors, context } = await openPage(false);
  let shopify = null;
  page.on('request', (r) => { if (r.url().includes('myshopify.com/cart/')) shopify = r.url(); });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForSelector('#collection figure');
  let body = await text(page);
  check('accueil : âges 2–3 / 3–5 / dès 5 ans', /2–3\sans/.test(body) && /3–5\sans/.test(body) && /dès 5\sans/.test(body) && !/0–1\san/.test(body));
  check('accueil : aucune allégation retirée', !/plus choisi|Dessiné en France|OEKO|nos ateliers/i.test(body));
  check('accueil : « visuel provisoire » sur Le Grand', /visuel provisoire/i.test(body));
  check('accueil : prix affichés « 32 € »', /32\s€/.test(body));
  check('liens : aucun lien sans adresse', (await page.$$('a:not([href])')).length === 0);
  await page.click('#collection a >> nth=0');
  await page.waitForSelector('.lpm-product-title');
  check('carte produit → #/oreiller/petit', page.url().endsWith('#/oreiller/petit'));
  check('titre d’onglet de la fiche', (await page.title()) === 'Le Petit — Koyumé', await page.title());
  check('Le Petit : sa seule photo, pas de témoignage', !(await text(page)).includes('Claire') && !(await page.$('.lpm-product-thumbs')));
  await page.selectOption('select', '2');
  await page.click('button:has-text("Ajouter au panier")');
  check('quantité 2 → 2 articles', (await badge(page)) === 2, `pastille ${await badge(page)}`);
  await page.goBack();
  await page.waitForSelector('#collection figure');
  check('retour navigateur → reste sur le site', page.url().startsWith(base) && !page.url().includes('oreiller'));
  await page.goto(base + '#/oreiller/moyen', { waitUntil: 'networkidle' });
  await page.waitForSelector('.lpm-product-title');
  check('lien direct vers Le Moyen', (await page.textContent('.lpm-product-title')) === 'Le Moyen');
  check('panier conservé après rechargement', (await badge(page)) === 2);
  check('Le Moyen : ses 3 photos', (await page.$$('.lpm-product-thumbs button')).length === 3);
  await page.click('button:has-text("Ajouter au panier")');
  await page.click('footer a:has-text("Livraison")');
  await page.waitForTimeout(400);
  body = await text(page);
  check('pied de page → FAQ ouverte sur la livraison', page.url().endsWith('#/questions/livraison') && /Expédition sous 48\sh/.test(body));
  await page.click('footer a:has-text("Entretien")');
  await page.waitForTimeout(400);
  check('pied de page → FAQ ouverte sur l’entretien', /lavable en machine à 30\s°C/.test(await text(page)));
  await page.click('header button:has-text("EN")');
  check('version anglaise : langue de la page = en', (await page.evaluate(() => document.documentElement.lang)) === 'en');
  await page.click('header button:has-text("FR")');
  await page.click('header button[aria-label]');
  await page.waitForSelector('text=Passer commande');
  body = await text(page);
  check('panier : sous-total 106 € et livraison offerte cochée', /Sous-total · 106\s€/.test(body) && /✓ Livraison offerte/.test(body));
  await page.click('text=Passer commande');
  await page.waitForTimeout(800);
  check('lien Shopify : Petit ×2 + Moyen ×1', shopify === 'https://jv1j5c-7a.myshopify.com/cart/43175297614033:2,43175297646801:1', shopify || 'aucun');
  check('aucune erreur JavaScript (ordinateur)', errors.length === 0, errors.join(' | '));
  await context.close();
}

// --- Mobile : mise en page et captures
{
  const { page, errors, context } = await openPage(true);
  const shot = async (name, full = false) => captures && page.screenshot({ path: path.join(captures, `${name}.png`), fullPage: full });
  if (captures) fs.mkdirSync(captures, { recursive: true });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await shot('mobile-accueil');
  await page.evaluate(() => document.getElementById('guide').scrollIntoView());
  await shot('mobile-guide-tailles');
  const orphan = await page.evaluate(() => { const h = document.querySelector('#guide h2'); const r = document.createRange(); r.selectNodeContents(h); return r.getClientRects().length; });
  check('guide des tailles : titre sans « ? » isolé', orphan <= 2, `${orphan} lignes`);
  await page.goto(base + '#/oreiller/moyen', { waitUntil: 'networkidle' });
  await page.waitForSelector('.lpm-product-title');
  await page.evaluate(() => document.fonts.ready);
  const add = await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /Ajouter au panier/.test(x.textContent)); return Math.round(b.getBoundingClientRect().bottom); });
  check('fiche produit mobile : bouton « Ajouter au panier » dans le premier écran', add <= 844, `bas du bouton à ${add} px (écran 844)`);
  await shot('mobile-fiche-produit');
  await page.click('button:has-text("Ajouter au panier")');
  await page.click('header button[aria-label]');
  await page.waitForSelector('.lpm-cart-row');
  await page.waitForTimeout(300);
  const name = await page.evaluate(() => { const el = document.querySelector('.lpm-cart-info div'); const r = document.createRange(); r.selectNodeContents(el); return r.getClientRects().length; });
  check('panier mobile : nom du produit sur une ligne', name === 1, `${name} ligne(s)`);
  await shot('mobile-panier');
  check('aucune erreur JavaScript (mobile)', errors.length === 0, errors.join(' | '));
  await context.close();
}

await browser.close();
server.close();
console.log(results.join('\n'));
const failed = results.filter((r) => r.startsWith('ÉCHEC')).length;
console.log(failed ? `${failed} échec(s)` : `Tout est OK (${results.length} vérifications)`);
process.exit(failed ? 1 : 0);
