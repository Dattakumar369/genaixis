import sharp from 'sharp';
import { resolve } from 'node:path';

const SIZE = 1200;
const LOGO_PATH = resolve('public/genaixis.png');
const OUTPUT_PATH = resolve('public/og-image.png');

const logo = sharp(LOGO_PATH);
const meta = await logo.metadata();
const maxLogoWidth = SIZE * 0.88;
const maxLogoHeight = SIZE * 0.42;
const scale = Math.min(maxLogoWidth / meta.width, maxLogoHeight / meta.height);
const logoWidth = Math.round(meta.width * scale);
const logoHeight = Math.round(meta.height * scale);
const resizedLogo = await logo.resize(logoWidth, logoHeight).png().toBuffer();

await sharp({
  create: {
    width: SIZE,
    height: SIZE,
    channels: 3,
    background: { r: 248, g: 250, b: 252 },
  },
})
  .composite([
    {
      input: resizedLogo,
      left: Math.round((SIZE - logoWidth) / 2),
      top: Math.round((SIZE - logoHeight) / 2),
    },
  ])
  .png()
  .toFile(OUTPUT_PATH);

console.log(`Generated ${OUTPUT_PATH} (${SIZE}x${SIZE})`);
