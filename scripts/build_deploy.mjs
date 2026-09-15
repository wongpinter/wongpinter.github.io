import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const rootDir = process.cwd();

console.log('1. Building with Vite...');
execSync('npx tsc && npx vite build', { stdio: 'inherit' });

console.log('2. Copying compiled distribution to root for GitHub Pages...');
fs.copyFileSync(path.join(rootDir, 'dist/index.html'), path.join(rootDir, 'index.html'));

// Copy all assets from dist/assets to assets/
const distAssets = fs.readdirSync(path.join(rootDir, 'dist/assets'));
for (const file of distAssets) {
  fs.copyFileSync(path.join(rootDir, 'dist/assets', file), path.join(rootDir, 'assets', file));
}

console.log('✓ Build and static distribution prepared successfully!');
