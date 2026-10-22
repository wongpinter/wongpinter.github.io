import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const rootDir = process.cwd();

console.log('1. Preparing source index.html from template...');
fs.copyFileSync(path.join(rootDir, 'index.template.html'), path.join(rootDir, 'index.html'));

console.log('2. Building with Vite & TypeScript...');
execSync('npx tsc && npx vite build', { stdio: 'inherit' });

console.log('3. Copying compiled distribution to root for GitHub Pages...');
fs.copyFileSync(path.join(rootDir, 'dist/index.html'), path.join(rootDir, 'index.html'));

// Copy all assets from dist/assets to assets/
const distAssets = fs.readdirSync(path.join(rootDir, 'dist/assets'));
for (const file of distAssets) {
  fs.copyFileSync(path.join(rootDir, 'dist/assets', file), path.join(rootDir, 'assets', file));
}

// Ensure robots.txt and sitemap.xml exist in root
fs.copyFileSync(path.join(rootDir, 'public/robots.txt'), path.join(rootDir, 'robots.txt'));
fs.copyFileSync(path.join(rootDir, 'public/sitemap.xml'), path.join(rootDir, 'sitemap.xml'));

console.log('✓ Build, SEO assets, and static distribution prepared successfully!');
