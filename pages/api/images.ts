import fs from "fs";
import path from "path";
import sharp from "sharp";
import { NextApiRequest, NextApiResponse } from "next";

interface ImageResponse {
  images: { src: string; width: number; height: number }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImageResponse>
) {
  const imagesDirectory = path.join(process.cwd(), "public/smartcraft_gallery");
  const outputDirectory = path.join(
    process.cwd(),
    "public/smartcraft_gallery_resized"
  );

  // Ensure the output directory exists
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  let imageFiles: string[] = [];

  try {
    imageFiles = fs
      .readdirSync(imagesDirectory)
      .filter((file) => !file.startsWith("."));
  } catch (error) {
    console.error("Error reading image directory:", error);
    return res.status(500).json({ images: [] });
  }

  const images = await Promise.all(
    imageFiles.map(async (file) => {
      const inputFilePath = path.join(imagesDirectory, file);
      const outputFilePath = path.join(outputDirectory, file);

      try {
        // Fix orientation and resize the image
        const metadata = await sharp(inputFilePath)
          .rotate() // Automatically fix orientation based on EXIF data
          .resize({ width: 500 }) // Resize to a max width of 500px
          .toFile(outputFilePath);

        return {
          src: `/smartcraft_gallery_resized/${file}`,
          width: metadata.width || 500,
          height:
            metadata.height ||
            Math.round((metadata.height || 0) * (500 / (metadata.width || 1))),
        };
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
        return null;
      }
    })
  );

  res.status(200).json({ images: images.filter(Boolean) }); // Remove null entries
}
