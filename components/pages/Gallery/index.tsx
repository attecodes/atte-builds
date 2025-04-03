import React, { FC, useState, useEffect } from "react";

import Image from "next/image";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";

import { Section, Text, PageHead, Navigation, Footer } from "components";
import { Galleries } from "lib/queries";
import * as styles from "./styles";

type Props = {
  galleries: Galleries;
};

export const Gallery: FC<Props> = (props: Props) => {
  const [images, setImages] = useState<
    { src: string; width: number; height: number }[]
  >([]);

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
          <Text t="h2" align="center">
            Gallery
          </Text>
          {props.galleries.map((gallery, key) => (
            <div className="container" key={key}>
              <Text t="h4">{gallery.title}</Text>
              <div className="wide">
                {/* <div className="gallery-grid"> */}
                <LightGallery plugins={[]} download={false}>
                  {gallery.images.map((image, index) => (
                    <a href={image.imageUrl} key={index}>
                      <Image
                        src={image.imageUrl}
                        alt={`Image ${index}`}
                        width={350}
                        height={350}
                        className="gallery-image"
                      />
                    </a>
                  ))}
                </LightGallery>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
};
