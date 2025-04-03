import React from "react";

import { NextPage } from "next";
import Image from "next/image";

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
      <Section variant="gray" firstSection>
        <div className={styles.section}>
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
        </div>
      </Section>
      <Section>
        <div className={styles.section}>
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
        </div>
      </Section>
      <Section variant="gray">
        <div className={styles.section}>
          <Text t="h2" align="center">
            Customer Reviews
          </Text>
          <GoogleReviews />
        </div>
      </Section>
      <Section>
        <div className={styles.section}>
          <Text t="h2" align="center">
            Brands that we enjoy
          </Text>
          <div className="logo-container">
            <div className="logo-wrapper">
              <Image
                src="/brands/Makita.png"
                alt="Makita logo"
                width={200}
                height={100}
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src="/brands/sawstop.webp"
                alt="SawStop logo"
                width={200}
                height={100}
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src="/brands/milwaukee.png"
                alt="Milwaukee logo"
                width={300}
                height={200}
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/Festool.png"}
                width={400}
                height={100}
                alt="festool logo"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/sketchup.png"}
                width={200}
                height={100}
                alt="sketchup logo"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/dewalt.png"}
                width={300}
                height={100}
                alt="dewalt logo"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/fastcap.jpg"}
                width={200}
                height={100}
                alt="fastcap logo"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/timbertech.png"}
                width={300}
                height={100}
                alt="timbertech logo"
              />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};
