import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy text-stone-300 mt-auto">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="SD Finish logo"
          width={160}
          height={160}
          className="opacity-90"
        />

        {/* Tagline */}
        <p className="text-stone-200 font-semibold text-lg tracking-wide">
          SD Finish Carpentry
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-brand-green" />

        {/* License + copyright */}
        <div className="text-center text-sm space-y-1">
          <p>CA Contractor License C-6 &mdash; Cabinet, Millwork &amp; Finish Carpentry</p>
          <p>San Diego County</p>
        </div>
        <p className="text-stone-500 text-xs">
          &copy; {new Date().getFullYear()} SD Finish. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
