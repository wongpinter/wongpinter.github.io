import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const rootDir = process.cwd();

console.log('1. Preparing source index.html template with /src/main.tsx entry...');
const devIndexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
    <link rel="apple-touch-icon" sizes="64x64" href="/favicon-64x64.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sugeng Supriyadi (wongpinter) • Senior Backend Engineer</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="Sugeng Supriyadi (wongpinter) • Senior Backend Engineer" />
    <meta name="description" content="Senior Backend Engineer from Jakarta with 12+ years shipping reliable distributed systems in Go, Python, and TypeScript. Focus on CDC, message brokers, API gateways, and AI agents." />
    <meta name="keywords" content="Sugeng Supriyadi, wongpinter, Backend Engineer, Go, Golang, CDC, PostgreSQL, Redis, Jakarta, Software Architect" />
    <meta name="author" content="Sugeng Supriyadi" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://wongpinter.com/" />
    <meta property="og:title" content="Sugeng Supriyadi (wongpinter) • Senior Backend Engineer" />
    <meta property="og:description" content="16-bit RPG Portfolio of Sugeng Supriyadi — 12+ years shipping reliable distributed systems in Go, Python, TypeScript." />
    <meta property="og:image" content="/avatar.webp" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://wongpinter.com/" />
    <meta property="twitter:title" content="Sugeng Supriyadi (wongpinter) • Senior Backend Engineer" />
    <meta property="twitter:description" content="16-bit RPG Portfolio of Sugeng Supriyadi — 12+ years shipping reliable distributed systems in Go, Python, TypeScript." />
    <meta property="twitter:image" content="/avatar.webp" />

    <!-- Google Fonts Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body class="bg-[#060a18] text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'index.html'), devIndexHtml, 'utf-8');

console.log('2. Running TypeScript compiler and Vite production build...');
execSync('npx tsc && npx vite build', { stdio: 'inherit' });

console.log('3. Copying compiled distribution to root for GitHub Pages...');
fs.copyFileSync(path.join(rootDir, 'dist/index.html'), path.join(rootDir, 'index.html'));

// Copy all assets from dist/assets to assets/
const distAssets = fs.readdirSync(path.join(rootDir, 'dist/assets'));
for (const file of distAssets) {
  fs.copyFileSync(path.join(rootDir, 'dist/assets', file), path.join(rootDir, 'assets', file));
}

console.log('✓ Build and static distribution prepared successfully!');
