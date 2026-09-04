/**
 * Drives a real browser over every route at every QA width, saves full-page
 * screenshots under docs/qa-screenshots/, and reports the things that are more
 * reliably measured than eyeballed: horizontal overflow, console errors, and
 * any element wider than its viewport.
 *
 *   node scripts/qa-shots.mjs [baseUrl] [--reduced-motion] [--no-js]
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = process.argv[2]?.startsWith('http') ? process.argv[2] : 'http://localhost:3000';
const REDUCED = process.argv.includes('--reduced-motion');
const NO_JS = process.argv.includes('--no-js');

const ROUTES = [
  ['home', '/'],
  ['work-answer-movement', '/work/answer-movement'],
  ['work-operation-drake', '/work/operation-drake'],
  ['work-ai-playbook', '/work/ai-playbook'],
  ['lab', '/lab'],
  ['writing', '/writing'],
  ['writing-table-talk', '/writing/before-tiktok-there-was-table-talk'],
];

const WIDTHS = [375, 430, 768, 1024, 1440];

const suffix = REDUCED ? '-reduced' : NO_JS ? '-nojs' : '';
const OUT = `docs/qa-screenshots${suffix}`;

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.ok) return true;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

const problems = [];

if (!(await waitForServer(BASE))) {
  console.error(`Server never came up at ${BASE}`);
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: REDUCED ? 'reduce' : 'no-preference',
    javaScriptEnabled: !NO_JS,
  });

  for (const [name, route] of ROUTES) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()));
    page.on('pageerror', (e) => consoleErrors.push(String(e)));

    const res = await page.goto(BASE + route, { waitUntil: 'networkidle' });

    // Scroll the whole page so every IntersectionObserver-driven reveal fires.
    // Without this a full-page screenshot captures the un-revealed state and
    // everything below the fold photographs as blank.
    // With JS disabled there is nothing to trigger and nothing that can run in
    // the page — the whole point of the pass is that content is visible anyway.
    if (!NO_JS) await page.evaluate(async () => {
      // globals.css sets scroll-behavior: smooth, which turns each scrollTo into
      // an animation that the next call restarts — the page never actually
      // traverses and nothing below the second viewport ever reveals.
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';

      const step = window.innerHeight * 0.75;
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 90));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
      document.documentElement.style.scrollBehavior = prev;
    });

    if (!res || res.status() >= 400) {
      problems.push(`[${width}] ${route} -> HTTP ${res ? res.status() : 'no response'}`);
    }

    // Horizontal overflow, measured rather than guessed.
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      const offenders = [];
      if (doc.scrollWidth > doc.clientWidth) {
        for (const el of document.querySelectorAll('*')) {
          const r = el.getBoundingClientRect();
          if (r.right > doc.clientWidth + 1 || r.left < -1) {
            offenders.push(
              `${el.tagName.toLowerCase()}.${String(el.className || '').split(' ')[0]} (right=${Math.round(r.right)})`
            );
          }
        }
      }
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        offenders: offenders.slice(0, 5),
      };
    });

    if (overflow.scrollWidth > overflow.clientWidth) {
      problems.push(
        `[${width}] ${route} OVERFLOW ${overflow.scrollWidth}>${overflow.clientWidth} :: ${overflow.offenders.join(' | ')}`
      );
    }

    if (consoleErrors.length) {
      problems.push(`[${width}] ${route} CONSOLE: ${consoleErrors.slice(0, 3).join(' | ')}`);
    }

    await page.screenshot({ path: `${OUT}/${name}-${width}.png`, fullPage: true });
    await page.close();
  }

  await context.close();
}

await browser.close();

console.log(`\nSaved to ${OUT}/  (${ROUTES.length * WIDTHS.length} shots)`);
if (problems.length) {
  console.log(`\n${problems.length} PROBLEM(S):`);
  for (const p of problems) console.log('  - ' + p);
} else {
  console.log('\nNo overflow, HTTP or console errors detected.');
}
