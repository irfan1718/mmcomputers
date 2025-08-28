import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MM Computers and IT Solutions | Kasaragod',
  description:
    'MM Computers and IT Solutions - Wholesale & retail store for computer accessories, hardware, laptops, desktops, printers, and CCTV installation services in Kasaragod. Your trusted partner for sales, repair, and IT solutions.',
  keywords:
    'MM Computers Kasaragod, computer shop Kasaragod, computer accessories Kasaragod, laptop sales Kasaragod, desktop sales Kasaragod, printer sales Kasaragod, CCTV installation Kasaragod, hardware service Kasaragod, computer hardware Kasaragod, laptop repair Kasaragod, desktop repair Kasaragod, printer repair Kasaragod, IT services Kasaragod, wholesale computer Kasaragod, retail computer Kasaragod, PC accessories Kasaragod, monitor sales Kasaragod, motherboard Kasaragod, computer spares Kasaragod',
  authors: [{ name: 'MM Computers and IT Solutions' }],
  openGraph: {
    title:
      'MM Computers and IT Solutions | Computer Accessories, Hardware & Services in Kasaragod',
    description:
      'Your one-stop shop in Kasaragod for wholesale & retail computer accessories, hardware sales, laptops, desktops, printers, and CCTV installation services.',
    url: 'https://mmcomputers-ind.com',
    siteName: 'MM Computers and IT Solutions',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'MM Computers Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MM Computers and IT Solutions | Kasaragod',
    description:
      'Computer hardware, accessories, CCTV installation, laptops, printers & IT services in Kasaragod. Wholesale & Retail available at City Centre, Bank Road.',
    images: ['/logo.png'],
  },
  metadataBase: new URL('https://mmcomputers-ind.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
