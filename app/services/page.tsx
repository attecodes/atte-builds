import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ScrollReveal from '@/components/ScrollReveal'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Trim & Millwork Services — Crown Molding, Built-Ins & More',
  description:
    'Full-service trim and millwork contractor in San Diego County: custom gates and doors, built-ins, tongue-and-groove ceilings, staircases, deck railings, siding, and all interior trim profiles.',
  openGraph: {
    url: '/services',
  },
}

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Trim & Millwork Services — SD Finish',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'SD Finish',
    url: 'https://sdfinish.com',
  },
  itemListElement: services.map((service, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: 'SD Finish',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'San Diego County, California',
      },
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
    <div className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-3">Services</h1>
          <p className="text-stone-700 max-w-2xl text-lg">
            We handle interior and exterior finish carpentry — from accent walls and trim profiles
            to custom gates, decks, stairs, and pergolas. Every job is completed to exacting
            standards with clean details and tight joints.
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

        {/* CTA callout */}
        <div className="bg-navy text-stone-100 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-1">
              San Diego County
            </p>
            <h2 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h2>
            <p className="text-stone-200 max-w-lg">
              We take on new construction, remodels, and commercial work throughout San Diego County.
              Reach out for a free quote.
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
    </>
  )
}
