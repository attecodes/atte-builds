import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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

export const metadata: Metadata = {
  title: {
    default: 'SD Finish | C-6 Licensed Trim & Millwork',
    template: '%s | SD Finish',
  },
  description:
    'Licensed C-6 trim and millwork contractor serving San Diego County. Specializing in crown molding, base molding, wainscoting, coffered ceilings, and custom built-ins.',
  icons: {
    icon: '/logo.png',
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
