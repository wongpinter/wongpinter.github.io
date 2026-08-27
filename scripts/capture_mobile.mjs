import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const SCREENSHOTS_DIR = '/home/engineer/.gemini/antigravity-cli/brain/abae54d1-9c81-4243-985e-21a239070864/screenshots';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:8060 on mobile viewport...');
  await page.goto('http://localhost:8060/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Mobile Title Screen
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-01-title.png') });

  // 2. Click Start Game -> Mobile Dashboard
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-02-dashboard-top.png') });

  // Scroll down to menu on mobile
  await page.evaluate(() => window.scrollBy(0, 700));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-02-dashboard-bottom.png') });

  // 3. Open About Modal on Mobile
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-03-about-modal.png') });

  // Close About Modal
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 4. Open Inventory Modal on Mobile
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, 'mobile-04-inventory-modal.png') });

  await browser.close();
  console.log('Mobile screenshots captured successfully!');
}

run().catch(console.error);
