"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { PortfolioPhoto, TrimCategory } from "@/types";
import { cloudinaryLoader } from "@/lib/cloudinary";

const categoryLabels: Record<TrimCategory, string> = {
  siding: "Siding",
  cabinet: "Cabinets",
  door: "Doors",
  window: "Windows",
  stairs: "Stairs",
  handrails: "Handrails",
  trim: "Trim",
  other: "Other",
};

interface Props {
  photos: PortfolioPhoto[];
}

export default function Gallery({ photos }: Props) {
  const [activeCategory, setActiveCategory] = useState<TrimCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = Array.from(new Set(photos.map((p) => p.category)));

  const filtered =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-brand-green text-white"
              : "bg-stone-100 text-stone-800 hover:bg-stone-200"
          }`}
        >
          All Work
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-brand-green text-white"
                : "bg-stone-100 text-stone-800 hover:bg-stone-200"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((photo, index) => (
          <figure
            key={photo.id}
            className="overflow-hidden rounded-lg bg-stone-100 group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                loader={cloudinaryLoader}
                src={photo.cloudinaryUrl}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3">
              <p className="text-sm font-medium text-stone-800">{photo.caption}</p>
              {photo.location && (
                <p className="text-xs text-stone-600 mt-0.5">{photo.location}</p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-stone-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white text-4xl leading-none hover:text-stone-300 transition-colors px-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl mx-16 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              loader={cloudinaryLoader}
              src={currentPhoto.cloudinaryUrl}
              alt={currentPhoto.caption}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white text-4xl leading-none hover:text-stone-300 transition-colors px-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            &#8250;
          </button>

          {/* Caption */}
          <div
            className="absolute bottom-6 left-0 right-0 text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-medium">{currentPhoto.caption}</p>
            {currentPhoto.location && (
              <p className="text-xs text-stone-400 mt-1">{currentPhoto.location}</p>
            )}
            <p className="text-xs text-stone-500 mt-2">
              {(lightboxIndex ?? 0) + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
