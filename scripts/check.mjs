import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
async function files(directory) {
  const out = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (item.name === 'node_modules' || item.name.startsWith('.')) continue;
    const path = resolve(directory, item.name);
    if (item.isDirectory()) out.push(...await files(path));
    else out.push(path);
  }
  return out;
}
let checked = 0;
for (const file of await files(root)) {
  if (!/\.(?:m?js)$/.test(file)) continue;
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (result.status !== 0) { console.error(result.stderr); process.exit(1); }
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/(?:from\s+|import\s*\()(['"])(\.{1,2}\/[^'"]+)\1/g)) {
    if (match[2].includes('${')) continue;
    try { await access(resolve(dirname(file), match[2])); }
    catch { console.error('Missing import:', relative(root, file), match[2]); process.exit(1); }
  }
  checked++;
}
const html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="((?:assets|data)\/[^"#]+)"/g)) await access(resolve(root, match[1].split(/[?#]/)[0]));
for (const file of await files(resolve(root, 'assets/css'))) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/@import\s+url\(['"]([^'"]+)['"]\)/g)) await access(resolve(dirname(file), match[1]));
}
console.log(`Syntax and local imports OK (${checked} JavaScript files).`);
