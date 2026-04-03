import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MM Computers and IT Solutions | Kasaragod",
  description:
    "MM Computers and IT Solutions - Wholesale & retail store for computer accessories, hardware, laptops, desktops, printers, and CCTV installation services in Kasaragod. Your trusted partner for sales, repair, and IT solutions.",
  keywords:
    "MM Computers Kasaragod, computer shop Kasaragod, computer accessories Kasaragod, laptop sales Kasaragod, desktop sales Kasaragod, printer sales Kasaragod, CCTV installation Kasaragod, hardware service Kasaragod, computer hardware Kasaragod, laptop repair Kasaragod, desktop repair Kasaragod, printer repair Kasaragod, IT services Kasaragod, wholesale computer Kasaragod, retail computer Kasaragod, PC accessories Kasaragod, monitor sales Kasaragod, motherboard Kasaragod, computer spares Kasaragod",
  authors: [{ name: "MM Computers and IT Solutions" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://mmcomputers-ind.com",
  },
  openGraph: {
    title:
      "MM Computers and IT Solutions | Computer Accessories, Hardware & Services in Kasaragod",
    description:
      "Your one-stop shop in Kasaragod for wholesale & retail computer accessories, hardware sales, laptops, desktops, printers, and CCTV installation services.",
    url: "https://mmcomputers-ind.com",
    siteName: "MM Computers and IT Solutions",
    images: [
      {
        url: "https://mmcomputers-ind.com/logo.png",
        width: 800,
        height: 800,
        alt: "MM Computers and IT Solutions - Computer Shop in Kasaragod",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Computers and IT Solutions | Kasaragod",
    description:
      "Computer hardware, accessories, CCTV installation, laptops, printers & IT services in Kasaragod. Wholesale & Retail available at City Centre, Bank Road.",
    images: ["https://mmcomputers-ind.com/logo.png"],
  },
  metadataBase: new URL("https://mmcomputers-ind.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MM Computers and IT Solutions",
              image: "https://mmcomputers-ind.com/logo.png",
              url: "https://mmcomputers-ind.com",
              telephone: "+919895876355",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Near ICICI Bank, Opp Karnataka Bank, City Centre, Bank Road",
                addressLocality: "Kasaragod",
                addressRegion: "Kerala",
                postalCode: "671121",
                addressCountry: "IN",
              },
              openingHours: ["Mo-Sa 09:00-19:00", "Su 10:00-14:00"],
              sameAs: ["https://wa.me/919895876355"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
