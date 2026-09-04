/**
 * Renders the static Open Graph card once, here, and commits the PNG — rather
 * than generating it at request time. next/og would need an edge runtime and a
 * bundled font; this needs neither, and the card does not change per page.
 *
 *   node scripts/make-og.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FBFAF7"/>
  <rect x="0" y="0" width="1200" height="10" fill="#B4552D"/>

  <text x="90" y="150" font-family="Georgia, serif" font-size="26" letter-spacing="4"
        fill="#6B665E">WASHINGTON &amp; LEE — ECONOMICS, 2028</text>

  <text x="90" y="285" font-family="Georgia, 'Times New Roman', serif" font-size="96"
        fill="#1B1A17">Drake Krommenhoek</text>

  <rect x="90" y="330" width="70" height="2" fill="#B5AD9C"/>

  <text x="90" y="410" font-family="Georgia, serif" font-size="34" fill="#45423B">
    I build software people actually use, and spent last
  </text>
  <text x="90" y="458" font-family="Georgia, serif" font-size="34" fill="#45423B">
    summer working out which half of the work a
  </text>
  <text x="90" y="506" font-family="Georgia, serif" font-size="34" fill="#45423B">
    machine can be trusted with.
  </text>

  <text x="90" y="575" font-family="Georgia, serif" font-size="24" letter-spacing="3"
        fill="#8E3F1E">WORK · LAB · WRITING</text>
</svg>`;

await mkdir('public/images/og', { recursive: true });
const info = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/images/og/default.png');
console.log(`written ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
