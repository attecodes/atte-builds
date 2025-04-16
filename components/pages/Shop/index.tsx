import React from "react";

import { NextPage } from "next";

import { Section, Text, PageHead, Navigation, Footer } from "components";

import * as styles from "./styles";

export const Shop: NextPage = () => {
  return (
    <>
      <PageHead
        title="SD Finish"
        mediaTitle="SD Finish"
        metaDescription="Shop for SD Finish"
      />
      <Navigation activePage="Shop" />
      <Section fillViewport variant="gray" firstSection>
        <div className={styles.section}>
          <Text t="h1" align="center">
            Shop
          </Text>
          <Text t="body2">
            At SD Finish, we have the tools, expertise, and craftsmanship to
            create high-quality cabinets and custom furniture. Using SketchUp
            3D, we can bring ideas to life with detailed visualizations before
            turning them into reality. This also allows us to explore multiple
            design options before making a final decision. From precise assembly
            to seamless installation, we take pride in every step of the
            process. If you have a unique vision or custom request, feel free to
            reach out through our contact section—we’d love to bring your ideas
            to life!
          </Text>
        </div>
      </Section>

      <Footer />
    </>
  );
};
