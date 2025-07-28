import type { Metadata } from 'next';
import { Oxygen, Poppins, Roboto } from 'next/font/google';
import '../globals.css';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-oxygen',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '700'],
  display: 'swap',
  variable: '--font-poppins',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'E-Petshop | Home',
  description: 'E-Petshop é um e-commecer especializado em pets',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '192x192' },
      { url: '/android-chrome-192x192.png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${oxygen.variable} ${poppins.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
