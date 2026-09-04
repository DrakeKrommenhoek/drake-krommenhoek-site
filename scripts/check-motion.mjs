/**
 * Two guarantees that are easy to claim and easy to get wrong:
 *  1. prefers-reduced-motion: reduce — content is visible without scrolling.
 *  2. The layout.tsx failsafe — if React never mounts, the hiding flag is
 *     dropped after 3s rather than leaving the page blank forever.
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:3000';
const browser = await chromium.launch();

async function hiddenBelowFold(context) {
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  const r = await page.evaluate(() => {
    const els = [...document.querySelectorAll('[data-reveal]')];
    const below = els.filter((e) => e.getBoundingClientRect().top > window.innerHeight);
    const hidden = below.filter((e) => Number(getComputedStyle(e).opacity) < 0.5);
    return { belowFold: below.length, hidden: hidden.length };
  });
  await page.close();
  return r;
}

// 1. Reduced motion.
const reduced = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
});
const a = await hiddenBelowFold(reduced);
console.log(
  `reduced-motion: ${a.belowFold} elements below the fold, ${a.hidden} hidden — ` +
    (a.hidden === 0 ? 'PASS' : 'FAIL, content is hidden for reduced-motion users')
);
await reduced.close();

// 2. Normal motion: things below the fold SHOULD start hidden.
const normal = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const b = await hiddenBelowFold(normal);
console.log(
  `normal motion:  ${b.belowFold} elements below the fold, ${b.hidden} hidden — ` +
    (b.hidden > 0 ? 'PASS (entrance animation is armed)' : 'FAIL, nothing will animate in')
);
await normal.close();

// 3. Failsafe: block the JS chunks so React can never hydrate, then confirm the
//    page does not stay blank.
const broken = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await broken.newPage();
await page.route('**/_next/static/chunks/**', (route) => route.abort());
await page.goto(BASE, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(4200); // failsafe fires at 3s
const c = await page.evaluate(() => {
  const els = [...document.querySelectorAll('[data-reveal]')];
  return {
    total: els.length,
    hidden: els.filter((e) => Number(getComputedStyle(e).opacity) < 0.5).length,
    flag: document.documentElement.getAttribute('data-reveal-ready'),
  };
});
console.log(
  `hydration blocked: ${c.total} reveal elements, ${c.hidden} still hidden, flag=${c.flag} — ` +
    (c.hidden === 0 ? 'PASS (failsafe recovered the page)' : 'FAIL, page stays blank')
);
await broken.close();

await browser.close();
