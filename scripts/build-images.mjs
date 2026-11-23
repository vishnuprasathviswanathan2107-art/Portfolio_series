// Builds optimized portrait assets from the original photos in the project root.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('pic1.jpeg');
const { width, height } = await hi.metadata();

const d1 = await sharp('pic1.jpeg').resize(width, height).raw().toBuffer();
const d2 = await sharp('pic.png').resize(width, height).raw().toBuffer();

function isBgPixel(idx) {
  const r = d2[idx], g = d2[idx + 1], b = d2[idx + 2];
  return (r >= 205 && g >= 205 && b >= 205 && Math.abs(r - g) <= 4 && Math.abs(g - b) <= 4 && Math.abs(r - b) <= 4);
}

const isBg = new Uint8Array(width * height);
const queue = [];
if (isBgPixel(0)) {
  isBg[0] = 1;
  queue.push(0);
}
const topR = width - 1;
if (isBgPixel(topR * 3)) {
  isBg[topR] = 1;
  queue.push(topR);
}

let head = 0;
while (head < queue.length) {
  const curr = queue[head++];
  const cx = curr % width;
  const cy = Math.floor(curr / width);
  const nbs = [
    [cx - 1, cy],
    [cx + 1, cy],
    [cx, cy - 1],
    [cx, cy + 1],
  ];
  for (const [nx, ny] of nbs) {
    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
      const nidx = ny * width + nx;
      if (!isBg[nidx] && isBgPixel(nidx * 3)) {
        isBg[nidx] = 1;
        queue.push(nidx);
      }
    }
  }
}

// Build 4-channel RGBA buffer
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = d1[i * 3];
  rgba[i * 4 + 1] = d1[i * 3 + 1];
  rgba[i * 4 + 2] = d1[i * 3 + 2];
  rgba[i * 4 + 3] = isBg[i] ? 0 : 255;
}

const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 92, alphaQuality: 98 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">VISHNU</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">DATA SCIENTIST • IT UNDERGRADUATE</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images rebuilt successfully with full face & body portrait');
