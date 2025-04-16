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
        title="SD Finish"
        mediaTitle="SD Finish"
        metaDescription="Gallery for SD Finish"
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
                    <a
                      href={image.imageUrl}
                      key={index}
                      className="gallery-item"
                    >
                      <Image
                        src={image.imageUrl}
                        alt={`Image ${index}`}
                        width={350}
                        height={350}
                        className="img-responsive"
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
