import type { ImageLoader } from 'next/image'

export const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality ?? 75}&f=auto`
}
