// Usage:
//   node scripts/screenshot.mjs https://example.com screenshot.png
//   node scripts/screenshot.mjs https://example.com screenshot-mobile.png --mobile
import puppeteer from "puppeteer";

const url = process.argv[2];
const out = process.argv[3] || "screenshot.png";
const isMobile = process.argv.includes("--mobile");

if (!url) {
  console.error("Missing URL. Example: node scripts/screenshot.mjs https://example.com screenshot.png");
  process.exit(1);
}

const viewports = {
  desktop: { width: 1366, height: 900, deviceScaleFactor: 1 },
  mobile:  { width: 390,  height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
};

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox","--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  const vp = isMobile ? viewports.mobile : viewports.desktop;
  await page.setViewport(vp);

  await page.goto(url, { waitUntil: "networkidle2", timeout: 120000 });
  await page.waitForTimeout(1500); // give MathJax a moment

  await page.screenshot({ path: out, fullPage: false });
  await browser.close();
  console.log(`Saved ${out}`);
})();
