import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.bytespire.in';
const LAST_MOD = '2026-03-15';

const pages = [
  {
    url: '/',
    priority: '1.00',
    changefreq: 'weekly',
  },
  {
    url: '/services',
    priority: '0.90',
    changefreq: 'monthly',
  },
  {
    url: '/contact',
    priority: '0.90',
    changefreq: 'monthly',
  },
  {
    url: '/projects',
    priority: '0.80',
    changefreq: 'monthly',
  },
  {
    url: '/blog',
    priority: '0.80',
    changefreq: 'weekly',
  },
  {
    url: '/blog/autotrophic-ai-companies',
    priority: '0.75',
    changefreq: 'monthly',
  },
  {
    url: '/about',
    priority: '0.80',
    changefreq: 'monthly',
  },
  {
    url: '/career',
    priority: '0.70',
    changefreq: 'monthly',
  },
];

export async function GET() {
  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
