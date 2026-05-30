import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve('dist');
const indexFile = resolve(distDir, 'index.html');
const siteUrl = 'https://genaixis.com';
const routes = {
  about: {
    title: 'About | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'A Product-Focused AI Innovation Company',
    description: 'GENAIXIS LABS PRIVATE LIMITED is a futuristic AI and software innovation company building products, SaaS platforms, enterprise systems, and AI-powered digital ecosystems.',
  },
  products: {
    title: 'Products | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'Product Ecosystems for the AI Era',
    description: 'Explore GENAIXIS products and platform capabilities including LearnStackHub, AI systems, SaaS platforms, automation systems, and future product ecosystems.',
  },
  services: {
    title: 'Technology | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'A Product Technology System for AI-First Software',
    description: 'Explore the GENAIXIS technology system: AI engine, platform core, automation OS, cloud layer, product architecture, and future software ecosystems.',
  },
  careers: {
    title: 'Careers | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'Build What the Next Generation of Businesses Will Use',
    description: 'Join GENAIXIS LABS PRIVATE LIMITED and build AI products, SaaS platforms, automation systems, cloud solutions, and enterprise software with an AI-first product engineering team.',
  },
  contact: {
    title: 'Contact | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'Let Us Build Your AI Advantage',
    description: 'Contact GENAIXIS LABS PRIVATE LIMITED in Kondapur, Hyderabad for AI product development, SaaS platforms, automation systems, cloud solutions, enterprise software, careers, and support.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'Privacy Policy',
    description: 'Read how GENAIXIS LABS PRIVATE LIMITED collects, uses, protects, and handles information through its company website and related digital services.',
    noIndex: true,
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'Terms and Conditions',
    description: 'Read the terms and conditions for using the GENAIXIS LABS PRIVATE LIMITED website and related company information.',
    noIndex: true,
  },
  'cookie-policy': {
    title: 'Cookie Policy | GENAIXIS LABS PRIVATE LIMITED',
    h1: 'Cookie Policy',
    description: 'Read how GENAIXIS LABS PRIVATE LIMITED may use cookies and similar technologies on its website.',
    noIndex: true,
  },
};

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function withRouteMeta(html, route, meta) {
  const canonical = `${siteUrl}/${route}`;
  const robots = meta.noIndex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(meta.title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeAttribute(meta.description)}" />`)
    .replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeAttribute(meta.title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeAttribute(meta.description)}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeAttribute(meta.title)}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeAttribute(meta.description)}" />`)
    .replace(/<h1 data-seo-fallback-title>.*?<\/h1>/, `<h1 data-seo-fallback-title>${meta.h1}</h1>`)
    .replace(/<p data-seo-fallback-description>[\s\S]*?<\/p>/, `<p data-seo-fallback-description>${escapeAttribute(meta.description)}</p>`);
}

await copyFile(indexFile, resolve(distDir, '404.html'));

const indexHtml = await readFile(indexFile, 'utf8');

await Promise.all(
  Object.entries(routes).map(async ([route, meta]) => {
    const routeDir = resolve(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await writeFile(resolve(routeDir, 'index.html'), withRouteMeta(indexHtml, route, meta));
  }),
);
