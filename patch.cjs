const fs = require('fs');
const file = 'node_modules/astro/dist/core/build/default-prerenderer.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  "import { parseCookie, stringifySetCookie } from 'cookie';",
  "import pkg from 'cookie';\nconst { parseCookie, stringifySetCookie } = pkg;"
);
fs.writeFileSync(file, content);
console.log("Patched!");
