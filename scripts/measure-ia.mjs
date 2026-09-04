/**
 * Measures how much vertical space each homepage section actually occupies.
 * The critique's central finding was that Experience dwarfed Work, which is a
 * claim about proportion — so it should be checked with numbers, not an eye.
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:3000';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE, { waitUntil: 'networkidle' });

const rows = await page.evaluate(() => {
  const total = document.documentElement.scrollHeight;
  return {
    total,
    sections: [...document.querySelectorAll('main > section')].map((s) => ({
      id: s.id || '(no id)',
      h: Math.round(s.getBoundingClientRect().height),
      pct: +((s.getBoundingClientRect().height / total) * 100).toFixed(1),
    })),
  };
});

console.log(`Total page height: ${rows.total}px\n`);
for (const s of rows.sections) {
  const bar = '#'.repeat(Math.max(1, Math.round(s.pct / 2)));
  console.log(`${s.id.padEnd(12)} ${String(s.h).padStart(5)}px  ${String(s.pct).padStart(5)}%  ${bar}`);
}

await browser.close();
