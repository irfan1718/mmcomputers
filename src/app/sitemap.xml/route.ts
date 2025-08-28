import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://mmcomputers-ind.com';

  const pages = [{ url: '/', lastModified: new Date() }];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `<url>
  <loc>${baseUrl}${page.url}</loc>
  <lastmod>${page.lastModified.toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
