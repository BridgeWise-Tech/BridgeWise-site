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
  title: {
    template: "%s | BridgeWise-Tech",
    default: "BridgeWise-Tech"
  },
  metadataBase: new URL('https://bridgewise.tech/'),  // canonical link
  description: "Bridging the Gap Between Developers and Companies",
  referrer: 'origin-when-cross-origin',
  keywords: ['Bridgewise-tech', 'tech'],
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', 'https://example.com'),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BridgeWise-Tech',
    description: 'Bridging the Gap Between Developers and Companies',
    creator: '@nextjs',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  verification: {
    google: 'google',
  },
  assets: ['https://nextjs.org/assets'],  // url for all assets
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
