'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="relative z-20 bg-navy text-stone-100">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-brand-green transition-colors">
          SD Finish
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="tel:+16192460025"
            className="hidden sm:block text-sm font-semibold text-brand-green hover:text-white transition-colors"
          >
            (619) 246-0025
          </a>
          <nav>
            <ul className="flex gap-6 text-sm font-medium">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`transition-colors hover:text-brand-green ${
                      pathname === href ? 'text-brand-green' : 'text-stone-200'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
