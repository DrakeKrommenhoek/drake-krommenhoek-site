/** node scripts/crop.mjs <file> <top> <height> [outName] — crop a QA screenshot for close reading. */
import sharp from 'sharp';

const [file, top, height, outName] = process.argv.slice(2);
const src = `docs/qa-screenshots/${file}.png`;
const out = `docs/qa-screenshots/_crop-${outName ?? file + '-' + top}.png`;

const meta = await sharp(src).metadata();
await sharp(src)
  .extract({
    left: 0,
    top: Math.min(Number(top), meta.height - 1),
    width: meta.width,
    height: Math.min(Number(height), meta.height - Number(top)),
  })
  .toFile(out);

console.log(out);
