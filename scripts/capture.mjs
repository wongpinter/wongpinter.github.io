import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const SCREENSHOTS_DIR = '/home/engineer/.gemini/antigravity-cli/brain/abae54d1-9c81-4243-985e-21a239070864/screenshots';
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

async function run() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  console.log('Navigating to http://localhost:8060...');
  await page.goto('http://localhost:8060/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Title Screen
  console.log('Capturing 01-title-screen.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-title-screen.png') });

  // 2. Click Start Game -> Main Dashboard
  console.log('Pressing Enter to start...');
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 800));
  console.log('Capturing 02-dashboard-menu.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-dashboard-menu.png') });

  // 3. Open About Me (Press Enter on item 0)
  console.log('Opening About Me modal...');
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 1200));
  console.log('Capturing 03-about-modal.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-about-modal.png') });

  // Close About Me
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 4. Navigate down to Inventory (index 1) and open
  console.log('Navigating to Inventory...');
  await page.keyboard.press('ArrowDown');
  await new Promise(r => setTimeout(r, 300));
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 500));
  console.log('Capturing 04-inventory-modal.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-inventory-modal.png') });

  // Click on the first project (WALSTREAM)
  console.log('Opening WALSTREAM Item Detail...');
  const firstProject = await page.$('.rpg-box.cursor-pointer');
  if (firstProject) {
    await firstProject.click();
    await new Promise(r => setTimeout(r, 500));
    console.log('Capturing 05-item-detail-modal.png...');
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '05-item-detail-modal.png') });
    // Close item detail
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));
  }

  // Close Inventory modal
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 5. Navigate down to Stats (index 2) and open
  console.log('Navigating to Stats...');
  await page.keyboard.press('ArrowDown');
  await new Promise(r => setTimeout(r, 300));
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 800));
  console.log('Capturing 06-stats-modal.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '06-stats-modal.png') });

  // Close Stats modal
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 6. Navigate down to Quest Log (index 3) and open
  console.log('Navigating to Quest Log...');
  await page.keyboard.press('ArrowDown');
  await new Promise(r => setTimeout(r, 300));
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 500));
  console.log('Capturing 07-quest-log-modal.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '07-quest-log-modal.png') });

  // Close Quest Log modal
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 7. Navigate down to Save Point (index 4) and open
  console.log('Navigating to Save Point...');
  await page.keyboard.press('ArrowDown');
  await new Promise(r => setTimeout(r, 300));
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 500));
  console.log('Capturing 08-save-point-modal.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '08-save-point-modal.png') });

  // Close Save Point modal
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 8. Trigger Konami Code
  console.log('Entering Konami Code sequence...');
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  for (const k of konami) {
    await page.keyboard.press(k);
    await new Promise(r => setTimeout(r, 100));
  }
  await new Promise(r => setTimeout(r, 500));
  console.log('Capturing 09-rainbow-mode.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '09-rainbow-mode.png') });

  // 9. Mobile Viewport (375x812)
  console.log('Switching to mobile viewport...');
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await new Promise(r => setTimeout(r, 500));
  console.log('Capturing 10-mobile-dashboard.png...');
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '10-mobile-dashboard.png') });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
