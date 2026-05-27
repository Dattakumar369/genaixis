import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const indexFile = resolve(distDir, 'index.html');
const routes = [
  'about',
  'products',
  'services',
  'careers',
  'contact',
  'privacy-policy',
  'terms-and-conditions',
  'cookie-policy',
];

await copyFile(indexFile, resolve(distDir, '404.html'));

await Promise.all(
  routes.map(async (route) => {
    const routeDir = resolve(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await copyFile(indexFile, resolve(routeDir, 'index.html'));
  }),
);
