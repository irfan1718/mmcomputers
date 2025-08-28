import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://mmcomputers-ind.com'; // replace with your domain

  const pages = [{ url: '/', lastModified: new Date() }];

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
