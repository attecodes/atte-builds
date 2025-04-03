import React from "react";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Section,
  Text,
  PageHead,
  Navigation,
  Footer,
  ButtonPrimary,
  GoogleReviews,
} from "components";

import * as styles from "./styles";

export const Home: NextPage = () => {
  return (
    <>
      <PageHead
        title="Smart Craft Solutions"
        mediaTitle="Smart Craft Solutions"
        metaDescription="Home page for Smart Craft Solutions"
      />
      <Navigation activePage="Home" />
      <main className={styles.main}>
        <Section variant="gray" className={styles.section} firstSection>
          <Text t="h1" align="center">
            Welcome to Smart Craft Solutions (San Diego)
          </Text>
          <Text t="body2">
            At Smart Craft Solutions, wood isn’t just a material—it’s a passion.
            As a dedicated craftsman, I specialize in designing, cutting,
            painting, staining, repairing, and building anything with wood. From
            small repairs to full-scale projects like decks, doors, flooring,
            siding, demolition, cabinets, and custom furniture, I bring expert
            craftsmanship to every job.
          </Text>
        </Section>
        <Section className={styles.section}>
          <Text t="h3" align="start">
            What sets Smart Craft Solutions apart?
          </Text>
          <Text>
            ☑️ Precision & Craftsmanship – Every project is done with care,
            ensuring durability and beauty.
          </Text>
          <Text>
            ☑️ Efficient & Smart Methods – I use modern, productive techniques
            to streamline the process.
          </Text>
          <Text>
            ☑️ Technology-Driven Design – With 3D modeling, you can see your
            project before it’s built, ensuring your vision becomes reality.
          </Text>
          <Text>
            ☑️ A Personal Approach – As a small company, I focus on the process,
            collaborating closely with clients to create the best results. No
            matter the size of your project, if it involves wood, I can make it
            happen.
          </Text>
          <Text t="h3">Let’s build something amazing together!</Text>
        </Section>
        <Section variant="gray">
          <div className={styles.section}>
            <Text t="h2" align="center">
              Customer Reviews
            </Text>
            <GoogleReviews />
            <ButtonPrimary
              target="_blank"
              label="Check Out All Our Google Reviews"
              href="https://www.google.com"
            />
          </div>
        </Section>
        <Section>
          <div className={styles.section}>
            <Text t="h2" align="center">
              Brands that I like
            </Text>
            <Text>Makita</Text>
            <Text>SawStop</Text>
            <Text>Milwaukee</Text>
            <Text>Festool</Text>
            <Text>SketchUp</Text>
            <Text>Dewalt</Text>
            <Text>Fastcap</Text>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};
