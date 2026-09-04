/**
 * Keyboard, heading-order and target-size checks. These are the things that are
 * cheaper to assert than to eyeball, and the ones a screenshot pass misses.
 *
 *   node scripts/a11y-check.mjs [baseUrl]
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:3000';
const ROUTES = ['/', '/work/answer-movement', '/lab', '/writing', '/writing/before-tiktok-there-was-table-talk'];

const browser = await chromium.launch();
const findings = [];

for (const route of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE + route, { waitUntil: 'networkidle' });

  // 1. Heading order — no skipped levels, exactly one h1.
  const headings = await page.$$eval('h1,h2,h3,h4,h5,h6', (els) =>
    els.map((e) => ({ level: Number(e.tagName[1]), text: e.textContent.trim().slice(0, 45) }))
  );
  const h1s = headings.filter((h) => h.level === 1);
  if (h1s.length !== 1) findings.push(`${route}: ${h1s.length} <h1> elements (want exactly 1)`);
  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level > headings[i - 1].level + 1) {
      findings.push(
        `${route}: heading jumps h${headings[i - 1].level} -> h${headings[i].level} at "${headings[i].text}"`
      );
    }
  }

  // 2. Every focusable control must be reachable and show a visible focus ring.
  const focusables = await page.$$('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
  let unfocusable = 0;
  let noRing = 0;
  for (const el of focusables) {
    await el.focus().catch(() => {});
    const info = await el.evaluate((node) => {
      const active = document.activeElement === node;
      const s = getComputedStyle(node);
      const r = node.getBoundingClientRect();
      return {
        active,
        outlineWidth: s.outlineWidth,
        outlineStyle: s.outlineStyle,
        w: r.width,
        h: r.height,
        tag: node.tagName.toLowerCase(),
        label: (node.getAttribute('aria-label') || node.textContent || '').trim().slice(0, 30),
      };
    });
    if (!info.active) unfocusable++;
    else if (info.outlineStyle === 'none' || info.outlineWidth === '0px') {
      noRing++;
      if (noRing <= 3) findings.push(`${route}: no focus ring on <${info.tag}> "${info.label}"`);
    }
    // 44x44 minimum for interactive targets that are not inline text links.
    if (info.active && (info.tag === 'button' || info.tag === 'input') && (info.h < 44 || info.w < 44)) {
      findings.push(
        `${route}: small target <${info.tag}> "${info.label}" ${Math.round(info.w)}x${Math.round(info.h)}`
      );
    }
  }
  if (unfocusable) findings.push(`${route}: ${unfocusable} focusable elements did not take focus`);

  // 3. Images need alt text.
  const badImgs = await page.$$eval('img', (els) =>
    els.filter((e) => e.getAttribute('alt') === null).map((e) => e.getAttribute('src'))
  );
  for (const src of badImgs) findings.push(`${route}: <img> missing alt — ${src}`);

  // 4. A skip link should be the first focusable thing.
  const first = await page.evaluate(() => {
    const el = document.querySelector('a[href], button, input, [tabindex]:not([tabindex="-1"])');
    return el ? `${el.tagName.toLowerCase()}:${(el.textContent || '').trim().slice(0, 30)}` : 'none';
  });
  if (!/skip/i.test(first)) findings.push(`${route}: first focusable is "${first}" — no skip link`);

  await page.close();
}

await browser.close();

if (findings.length === 0) {
  console.log('No accessibility findings.');
} else {
  console.log(`${findings.length} finding(s):`);
  for (const f of findings) console.log('  - ' + f);
}
