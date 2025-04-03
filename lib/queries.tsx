export const queries = {
  /** fetch googleReviews */
  googleReviews: /* groq */ `
    *[_type == "googleReview"] | order(datePublished desc) {
      clientName,
      clientOccupation,
      "clientImageUrl": clientImage.asset->url,
      datePublished,
      review,
      stars
    }
  `,
  /** fetch all tech projects, sorted by publishedAt */
  techProjects: /* groq */ `
    *[_type == "techProject"] | order(publishedAt desc) {
      "slug": slug.current, 
      title, 
      publishedAt, 
      "imageUrl": mainImage.asset->url
    }
  `,
  /** fetch a tech project based on slug */
  techProject: /* groq */ `
    *[_type == "techProject" && slug.current == $slug][0] {
      body[] {
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "name": uploadedFile->.name,
            "href": uploadedFile->.file.asset->url
          }
        },
        _type == "image" => {
          ...,
          asset -> {
            url,
            "width": metadata.dimensions.width,
            "height": metadata.dimensions.height,
          }
        }
      },
      title,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  `,
};

/** Just details needed to render cards */
export type ProjectDetails = {
  slug: string;
  publishedAt: string;
  title: string;
  imageUrl?: string;
};

export type TechProjects = ProjectDetails[];

export type Project = {
  slug: string;
  title: string;
  body: { children: { text: string }[] }[];
  imageUrl?: string;
  publishedAt: string;
};

export type GoogleReview = {
  clientName: string;
  clientOccupation: string;
  clientImageUrl?: string;
  datePublished: string;
  review: string;
  stars: number;
};
export interface QueryContent {
  googleReviews: GoogleReview[];
  techProjects: TechProjects;
  techProject: Project;
}
