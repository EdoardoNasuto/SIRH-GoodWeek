import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handlers = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
    if (file !== 'index.js' && file.endsWith('.js')) {
        const module = await import(`./${file}`);
        for (const [exportedName, exportedValue] of Object.entries(module)) {
            handlers[exportedName] = exportedValue;
        }
    }
}

export default handlers;