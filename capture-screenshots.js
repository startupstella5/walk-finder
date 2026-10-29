const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const url = 'http://localhost:8080/#g=W1siU3RlbGxhIiwiR2xlbnZpZXciLDQyLjA3MDEsLTg3LjgxMTRdLFsiIiwiIixudWxsLG51bGxdLFsiIiwiIixudWxsLG51bGxdXQ';
  
  // 375px mobile
  const page375 = await browser.newPage();
  await page375.setViewport({ width: 375, height: 812 });
  await page375.goto(url, { waitUntil: 'networkidle0' });
  await page375.waitForTimeout(2000);
  await page375.screenshot({ path: '/opt/cursor/artifacts/screenshots/qa-375.png', fullPage: true });
  
  // Top mobile viewport crop
  await page375.screenshot({ path: '/opt/cursor/artifacts/screenshots/top-mobile.png', fullPage: false });
  await page375.close();
  
  // 768px tablet
  const page768 = await browser.newPage();
  await page768.setViewport({ width: 768, height: 1024 });
  await page768.goto(url, { waitUntil: 'networkidle0' });
  await page768.waitForTimeout(2000);
  await page768.screenshot({ path: '/opt/cursor/artifacts/screenshots/qa-768.png', fullPage: true });
  await page768.close();
  
  // 1280px desktop
  const page1280 = await browser.newPage();
  await page1280.setViewport({ width: 1280, height: 800 });
  await page1280.goto(url, { waitUntil: 'networkidle0' });
  await page1280.waitForTimeout(2000);
  await page1280.screenshot({ path: '/opt/cursor/artifacts/screenshots/qa-1280.png', fullPage: true });
  
  // Top desktop viewport crop
  await page1280.screenshot({ path: '/opt/cursor/artifacts/screenshots/top-desktop.png', fullPage: false });
  await page1280.close();
  
  await browser.close();
  console.log('Screenshots captured successfully!');
})();
