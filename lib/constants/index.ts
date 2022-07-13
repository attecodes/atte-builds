/** True if actually deployed on the production domain (not a preview/staging domain, not local dev) */
export const IS_PRODUCTION =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

// Sanity
export const SANITY_STUDIO_API_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID;

export const SANITY_STUDIO_API_DATASET =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET;
