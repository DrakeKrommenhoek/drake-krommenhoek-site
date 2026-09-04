/**
 * Captures the live project apps into a STAGING directory for review.
 * Nothing here writes into public/ — that is a deliberate second step, taken
 * only after looking at the images.
 *
 * Never point this at mc-performance-engine. It is firm-branded and must not be
 * screenshotted, linked or named. See docs/content-source-map.md.
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const OUT = 'docs/live-shots';
await mkdir(OUT, { recursive: true });

const TARGETS = [
  // theanswermovement.com turned out to be a Shopify storefront for the
  // trainer's equipment business, NOT the habit app. The app is the Vercel URL.
  { name: 'tam-shopify-NOT-the-app', url: 'https://theanswermovement.com' },
  { name: 'tam-app', url: 'https://the-answer-movement-app.vercel.app' },
  { name: 'ascend-landing', url: 'https://ascend-app-one.vercel.app' },
];

const browser = await chromium.launch();

for (const t of TARGETS) {
  for (const [label, width, height] of [
    ['desktop', 1440, 900],
    ['mobile', 390, 844],
  ]) {
    const page = await browser.newPage({ viewport: { width, height } });
    try {
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForTimeout(2500);
      await page.screenshot({ path: `${OUT}/${t.name}-${label}.png` });
      console.log(`${t.name}-${label}: ok — "${await page.title()}" — ${page.url()}`);
    } catch (e) {
      console.log(`${t.name}-${label}: FAILED — ${String(e).split('\n')[0]}`);
    }
    await page.close();
  }
}

await browser.close();
console.log(`\nStaged in ${OUT}/ — review before copying anything into public/.`);
