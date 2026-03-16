# Project: Trim & Millwork Contractor Website

## What this project is
Portfolio and contact website for a licensed trim and millwork subcontractor (C-6 license) based in San Diego, CA. The site targets general contractors and homeowners. It showcases completed work, lists services, and drives contact inquiries.

## Tech stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript — strict mode on, no `any`
- **Styling**: Tailwind CSS v4
- **Images**: Cloudinary (via `next/image` with Cloudinary loader)
- **Deployment**: Vercel
- **Package manager**: pnpm

## Project structure
```
/src
  /app
    layout.tsx          # Root layout, nav, footer
    page.tsx            # Homepage — hero, services summary, featured work CTA
    /portfolio
      page.tsx          # Full photo gallery with category filter
    /services
      page.tsx          # Detailed services page
    /contact
      page.tsx          # Contact form + license info
  /components
    Gallery.tsx         # Photo grid with Cloudinary images
    ServiceCard.tsx     # Individual service description card
    ContactForm.tsx     # Client-side contact form
    Nav.tsx
    Footer.tsx
  /data
    portfolio.ts        # Array of photo objects (Cloudinary URLs + metadata)
    services.ts         # Services list with descriptions
  /lib
    cloudinary.ts       # Cloudinary loader config for next/image
  /types
    index.ts            # Shared TypeScript types
```

## TypeScript types (source of truth)
```ts
// /src/types/index.ts

export type TrimCategory =
  | 'base'
  | 'crown'
  | 'door-casing'
  | 'window-casing'
  | 'wainscoting'
  | 'built-ins'
  | 'coffered-ceiling'
  | 'other'

export interface PortfolioPhoto {
  id: string
  cloudinaryUrl: string
  caption: string
  category: TrimCategory
  location?: string       // e.g. "Rancho Santa Fe" — no full addresses
}

export interface Service {
  id: string
  title: string
  description: string
  details: string[]       // bullet-point level detail
  category: TrimCategory[]
}
```

## Data files
All site content lives in `/src/data/`. Do not fetch from an API or CMS — everything is static TypeScript.

```ts
// /src/data/portfolio.ts
import type { PortfolioPhoto } from '@/types'
export const photos: PortfolioPhoto[] = [
  {
    id: '1',
    cloudinaryUrl: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/v.../filename',
    caption: 'Crown molding installation',
    category: 'crown',
    location: 'Del Mar',
  },
  // ... more entries
]
```

## Cloudinary image setup
```ts
// /src/lib/cloudinary.ts
import type { ImageLoader } from 'next/image'

export const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality ?? 75}&f=auto`
}
```

Use `next/image` with `loader={cloudinaryLoader}` on every portfolio image. Never use raw `<img>` tags.

## Coding conventions
- App Router only — no Pages Router patterns
- Server components by default; add `'use client'` only when needed (forms, interactivity)
- All components are functional with typed props interfaces
- No default exports from data or lib files — named exports only
- Components use default exports (Next.js page convention)
- File names: PascalCase for components, camelCase for lib/data/types
- Tailwind only for styling — no CSS modules, no inline `style` props unless unavoidable
- Images always have descriptive `alt` text
- Contact form uses a server action, not an API route

## SEO & metadata
Every page exports a `metadata` object:
```ts
export const metadata: Metadata = {
  title: 'San Diego Trim & Millwork | C-6 Licensed',
  description: '...',
}
```
Use `next/font` for any web fonts — never load fonts from a `<link>` tag.

## Business details (use these consistently across the site)
- **License**: California C-6 Cabinet, Millwork & Finish Carpentry
- **Service area**: San Diego County
- **Specialties**: Base molding, crown molding, door & window casing, wainscoting, coffered ceilings, built-ins, custom millwork

## Do not
- Do not install Sanity, Contentful, or any CMS
- Do not use the Pages Router
- Do not use `any` in TypeScript
- Do not use `<img>` — always `next/image`
- Do not commit photos to the repo — all images come from Cloudinary URLs in `portfolio.ts`
- Do not add authentication, dashboards, or admin UI — this is a static marketing site
- Do not add a blog unless explicitly asked
