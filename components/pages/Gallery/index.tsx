import React, { useState, useEffect } from "react";

import { NextPage } from "next";
import Image from "next/image";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Section, Text, PageHead, Navigation, Footer } from "components";

import * as styles from "./styles";

export const Gallery: NextPage = () => {
  const [images, setImages] = useState<
    { src: string; width: number; height: number }[]
  >([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.images);
      });
  }, []);
  console.log(images);
  return (
    <>
      <PageHead
        title="Smart Craft Solutions"
        mediaTitle="Smart Craft Solutions"
        metaDescription="Gallery for Smart Craft Solutions"
      />
      <Navigation activePage="Gallery" />

      <Section variant="gray" fillViewport firstSection>
        <div className={styles.section}>
          <Text t="h1" align="center">
            Gallery
          </Text>
          <Text t="body2">Pergola</Text>
          <div className="wide">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <div className="gallery-grid">
                {Array.isArray(images) &&
                  images.map((src, index) => (
                    <a href={src.src} key={index}>
                      <Image
                        src={src.src}
                        alt={`Image ${index}`}
                        width={src.width}
                        height={src.height}
                        className="gallery-image"
                      />
                    </a>
                  ))}
              </div>
            </LightGallery>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};
