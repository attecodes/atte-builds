import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Get a Quote — Contact SD Finish',
  description:
    'Request a quote from SD Finish, a trim and millwork contractor. Serving general contractors and homeowners throughout San Diego County.',
  openGraph: {
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Get in Touch</h1>
          <p className="text-stone-700 text-lg mb-8">
            Ready to start a project or need a bid? Fill out the form and we&apos;ll get back to you
            promptly. We work directly with homeowners and general contractors.
          </p>

          <dl className="space-y-6 text-stone-800">
            <div>
              <dt className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">
                Phone
              </dt>
              <dd className="font-medium">
                <a href="tel:+16192460025" className="hover:text-brand-green transition-colors">
                  (619) 246-0025
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">
                Service Area
              </dt>
              <dd className="font-medium">San Diego County, CA</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">
                Specialties
              </dt>
              <dd>
                <ul className="space-y-1 text-stone-700">
                  {[
                    'Custom gates &amp; doors',
                    'Stairs, decks &amp; pergolas',
                    'Handrails &amp; deck railings',
                    'Accent walls &amp; interior trim',
                    'Built-ins &amp; closet systems',
                  ].map((item) => (
                    <li key={item} dangerouslySetInnerHTML={{ __html: `&#8212; ${item}` }} />
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: form */}
        <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
