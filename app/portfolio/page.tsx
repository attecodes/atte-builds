import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import { photos } from "@/data/portfolio";

export const metadata: Metadata = {
  title: 'Project Portfolio — San Diego Trim & Millwork',
  description:
    'Browse completed trim and millwork projects across San Diego County — custom gates, built-ins, tongue-and-groove ceilings, staircases, deck railings, and more.',
  openGraph: {
    url: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-stone-900 mb-3">Portfolio</h1>
          <p className="text-stone-600 max-w-xl">
            A selection of completed trim and millwork projects throughout San
            Diego County.
          </p>
        </div>
        <Gallery photos={photos} />
      </div>
    </div>
  );
}
