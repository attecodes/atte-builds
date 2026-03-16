export type TrimCategory =
  | "siding"
  | "cabinet"
  | "door"
  | "window"
  | "stairs"
  | "handrails"
  | "trim"
  | "other";

export interface PortfolioPhoto {
  id: string;
  cloudinaryUrl: string;
  caption: string;
  category: TrimCategory;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  category: TrimCategory[];
}
