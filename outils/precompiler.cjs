// Convertit le JSX de la boutique en JavaScript ordinaire, pour la copie publiée uniquement
// (appelé par publier.sh). Sur main, rien ne change : index.html s'ouvre tel quel avec Babel.
// Usage : node outils/precompiler.cjs <chemin de babel.min.js> <dossier de la boutique>
const fs = require('fs');
const path = require('path');
const Babel = require(path.resolve(process.argv[2]));
const dir = process.argv[3];
// Chaque fichier dans sa propre portée, comme avec Babel dans le navigateur ;
// les composants partagés passent par window (Object.assign(window, …)).
const compile = (code) => '(function () {\n' + Babel.transform(code, { presets: ['react'] }).code + '\n})();\n';

const file = path.join(dir, 'index.html');
let html = fs.readFileSync(file, 'utf8');
html = html.replace(/<script src="https:\/\/unpkg\.com\/@babel\/standalone[^>]*><\/script>\n?/, '');
html = html.replace(/<script type="text\/babel" src="([\w-]+)\.jsx"><\/script>/g, (tag, name) => {
  fs.writeFileSync(path.join(dir, name + '.js'), compile(fs.readFileSync(path.join(dir, name + '.jsx'), 'utf8')));
  fs.unlinkSync(path.join(dir, name + '.jsx'));
  return `<script src="${name}.js"></script>`;
});
html = html.replace(/<script type="text\/babel">([\s\S]*?)<\/script>/g, (tag, code) => '<script>\n' + compile(code) + '</script>');
if (/text\/babel|@babel\/standalone/.test(html)) { console.error('precompiler: du JSX reste dans index.html'); process.exit(1); }
fs.writeFileSync(file, html);
