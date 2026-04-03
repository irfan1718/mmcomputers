import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /

Sitemap: https://mmcomputers-ind.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    },
  );
}
