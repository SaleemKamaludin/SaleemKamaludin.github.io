import puppeteer from 'puppeteer';

const url = 'https://saleemkamaludin.github.io'; // your live site
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle2' });

// Desktop screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });

// Mobile screenshot
const mobile = puppeteer.devices['iPhone X'];
await page.emulate(mobile);
await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

await browser.close();
