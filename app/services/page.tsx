import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ScrollReveal from '@/components/ScrollReveal'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Trim and millwork services in San Diego County: crown molding, base molding, wainscoting, door and window casing, coffered ceilings, and custom built-ins.',
}

export default function ServicesPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-3">Services</h1>
          <p className="text-stone-700 max-w-2xl text-lg">
            We specialize in all phases of interior finish carpentry — from simple base molding to
            fully custom built-ins. Every job is completed to exacting standards with clean details
            and tight joints.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={((i % 2) * 100) as 0 | 100 | 200 | 300 | 400}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* License callout */}
        <div className="bg-navy text-stone-100 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-1">
              Licensed &amp; Insured
            </p>
            <h2 className="text-2xl font-bold mb-2">California C-6 Contractor</h2>
            <p className="text-stone-200 max-w-lg">
              Cabinet, Millwork &amp; Finish Carpentry license. Available for new construction,
              remodel, and commercial projects throughout San Diego County.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3 bg-brand-green text-white font-semibold rounded-md hover:bg-brand-green-dark transition-colors whitespace-nowrap"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
