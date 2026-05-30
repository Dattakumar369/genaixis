import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  noIndex?: boolean;
}

const siteUrl = 'https://genaixis.com';
const defaultKeywords = [
  'GENAIXIS',
  'GENAIXIS LABS',
  'GENAIXIS LABS PRIVATE LIMITED',
  'genai',
  'genx',
  'genaxis',
  'gen aixis',
  'gen axis',
  'AI product engineering company',
  'AI software company Hyderabad',
  'SaaS platform development',
  'enterprise software development',
  'automation systems',
  'LearnStackHub',
  'LSH',
  'learnstackhub',
].join(', ');

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const element = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
}

function ensureMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function SEO({ title, description, keywords, canonicalPath, noIndex = false }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const canonical = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;
    const pageKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
    const robots = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    const googleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', pageKeywords);
    setMeta('meta[name="robots"]', 'content', robots);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    if (googleVerification && googleVerification !== 'replace-with-google-search-console-token') {
      ensureMeta('google-site-verification', googleVerification);
    }
  }, [title, description, keywords, canonicalPath, noIndex]);

  return null;
}
