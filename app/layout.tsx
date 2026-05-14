import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sdfinish.com'

const OG_IMAGE = {
  url: 'https://res.cloudinary.com/dn4favlhq/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/v1773678460/IMG_6965_iq3hjj.png',
  width: 1200,
  height: 630,
  alt: 'Custom arched double wood entry gate — SD Finish, San Diego',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'SD Finish',
  url: SITE_URL,
  telephone: '+1-619-246-0025',
  description:
    'Trim and millwork contractor serving San Diego County. Crown molding, base molding, wainscoting, coffered ceilings, custom built-ins, stairs, custom gates, and exterior siding.',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'San Diego County, California',
  },
  knowsAbout: [
    'crown molding installation',
    'base molding installation',
    'wainscoting',
    'coffered ceilings',
    'custom built-ins',
    'door casing',
    'window casing',
    'finish carpentry',
    'trim installation',
    'millwork',
    'tongue and groove ceilings',
    'custom gates and doors',
    'stair construction',
    'deck railings',
    'siding installation',
  ],
  sameAs: [
    'https://www.youtube.com/@SDFinish',
    'https://www.instagram.com/sdfinishco',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SD Finish | Custom Trim & Millwork — San Diego',
    template: '%s | SD Finish',
  },
  description:
    'Trim and millwork contractor serving San Diego County. Crown molding, base molding, wainscoting, coffered ceilings, custom built-ins, stairs, custom gates, and exterior siding.',
  keywords: [
    'finish carpentry San Diego',
    'trim contractor San Diego',
    'millwork contractor San Diego',
    'custom gates San Diego',
    'stair contractor San Diego',
    'deck contractor San Diego',
    'pergola builder San Diego',
    'handrail installation San Diego',
    'accent wall contractor San Diego',
    'wainscoting contractor San Diego',
    'custom built-ins San Diego',
    'deck railing contractor San Diego',
    'exterior siding San Diego',
    'interior trim San Diego',
  ],
  authors: [{ name: 'SD Finish' }],
  creator: 'SD Finish',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'SD Finish',
    title: 'SD Finish | Custom Trim & Millwork — San Diego',
    description:
      'Trim and millwork contractor serving San Diego County. Crown molding, base molding, wainscoting, coffered ceilings, custom built-ins, stairs, custom gates, and exterior siding.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SD Finish | Custom Trim & Millwork — San Diego',
    description:
      'Trim and millwork contractor serving San Diego County. Crown molding, wainscoting, custom built-ins, stairs, and more.',
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased flex flex-col min-h-screen bg-stone-50`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
