import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion Store - Discover Latest Trends',
  description: 'Shop the latest fashion trends in clothing, accessories, and more. Find your perfect style with our curated collection.',
  openGraph: {
    title: 'Fashion Store - Discover Latest Trends',
    description: 'Shop the latest fashion trends in clothing, accessories, and more.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Store - Discover Latest Trends',
    description: 'Shop the latest fashion trends in clothing, accessories, and more.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}