import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-stone-100 py-24 px-4">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center gap-12">
          <Image
            src="/logo.png"
            alt="SD Finish logo"
            width={240}
            height={240}
            className="shrink-0 animate-float"
            priority
          />
          <div>
            <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up">
              C-6 Licensed &middot; San Diego County
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Custom Finish Carpentry for San Diego Homes
            </h1>
            <p className="text-stone-200 text-lg sm:text-xl mb-10 max-w-xl animate-fade-in-up animation-delay-200">
              From custom gates and doors to stairs, decks, trim, and built-ins —
              we install finish carpentry that&apos;s built to last and crafted
              to impress. Serving general contractors and homeowners across San
              Diego County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/contact"
                className="px-8 py-3 bg-brand-green text-white font-semibold rounded-md hover:bg-brand-green-dark transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-brand-blue text-white font-semibold rounded-md hover:bg-brand-blue-dark transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-blue text-white py-4 px-4">
        <div className="mx-auto max-w-6xl flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium">
          <span>&#10003; CA C-6 Licensed &amp; Insured</span>
          <span>&#10003; San Diego County Service Area</span>
          <span>&#10003; New Construction &amp; Remodel</span>
          <span>&#10003; General Contractor Friendly</span>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-3">
              What We Do
            </h2>
            <p className="text-stone-700 max-w-xl mx-auto">
              Specializing in all phases of interior and exterior trim carpentry
              — installed right the first time.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={((i % 3) * 100) as 0 | 100 | 200 | 300 | 400}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border-2 border-navy text-navy font-semibold rounded-md hover:bg-navy hover:text-white transition-colors"
            >
              See All Services
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-3">What Clients Say</h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              Trusted by homeowners and general contractors across San Diego County.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                quote: "Atte did an incredible job on our built-in bookcase and reading nook. Clean work, tight joints, and he finished ahead of schedule. Would hire again without hesitation.",
                name: "Sarah M.",
                location: "La Jolla",
              },
              {
                quote: "We use SD Finish on all our high-end remodels. Reliable, professional, and the trim work is always perfect. Our clients notice the difference.",
                name: "James R.",
                location: "General Contractor, Del Mar",
              },
              {
                quote: "The custom entry gate came out better than I imagined. Really listened to what we wanted and executed it flawlessly. The craftsmanship is exceptional.",
                name: "David & Lisa T.",
                location: "Rancho Santa Fe",
              },
            ].map((t) => (
              <ScrollReveal key={t.name}>
                <figure className="bg-stone-50 border border-stone-200 rounded-lg p-6 h-full flex flex-col">
                  <blockquote className="text-stone-700 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 pt-4 border-t border-stone-200">
                    <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                    <p className="text-stone-500 text-sm">{t.location}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work CTA */}
      <section className="py-20 px-4 bg-navy text-stone-100">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            See the Craftsmanship Up Close
          </h2>
          <p className="text-stone-200 text-lg mb-8 max-w-xl mx-auto">
            Browse completed projects across San Diego County — stairs, decks,
            moulding, doors and more.
          </p>
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-brand-green text-white font-semibold rounded-md hover:bg-brand-green-dark transition-colors"
          >
            View Portfolio
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
