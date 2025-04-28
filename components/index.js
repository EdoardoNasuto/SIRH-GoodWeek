import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ComponentLoader } from 'adminjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();
const componentsDir = __dirname;

const Components = {};

const files = await fs.promises.readdir(componentsDir);

for (const file of files) {
    // Ignorer ce fichier index.js
    if (file === 'index.js') continue;

    const ext = path.extname(file);
    const name = path.basename(file, ext);

    if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) continue;

    Components[name] = componentLoader.add(name, path.resolve(__dirname, file));
}

export { componentLoader, Components };