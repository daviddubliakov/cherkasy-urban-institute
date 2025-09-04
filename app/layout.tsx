import { Open_Sans, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Черкаський Інститут Міста',
  description: 'Кращі практики міського життя',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ua'>
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className='min-h-[calc(100vh-148px)]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
