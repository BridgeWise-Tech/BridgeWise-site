'use strict'

import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Not Found',
  description: 'Bridging the Gap Between Developers and Companies',
  applicationName: '', //application name
  referrer: 'origin-when-cross-origin',
  keywords: ['Bridgewise-tech', 'tech'],
  openGraph: {
    title: '404 - Not Found',
    description: 'Bridging the Gap Between Developers and Companies',
    url: 'https://bridgewise.tech/',
    siteName: 'BridgeWise-Tech',
    type: 'website',
    images: [
      {
        url: '/404.svg',  /* sharing card image url/path, must be absolute URL*/
        width: 800,
        height: 600,
        alt: '404 Not Found',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourwebsite', // The Twitter username of the website or content creator
    title: '404 - Not Found',
    description: 'Bridging the Gap Between Developers and Companies',
    images: [
      {
        url: '/404.svg',
        width: 800,
        height: 600,
        alt: '404 not found'
      }
    ], // The image URL for the Twitter card
  },
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
  icons: {
    icon: '/404.svg',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google',
  },
  assets: ['https://nextjs.org/assets'],  // url for all assets
  category: 'technology',
}

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/404.svg" alt="404" width={500} height={500} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        <Link href='/'>Go Back</Link>
      </button>
    </div>
  )
}