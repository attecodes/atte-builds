import React from "react";

import { NextPage } from "next";

import { Section, Text, PageHead, Navigation, Footer } from "components";

import * as styles from "./styles";
import Image from "next/image";

export const About: NextPage = () => {
  return (
    <>
      <PageHead
        title="Smart Craft Woodworks"
        mediaTitle="Smart Craft Woodworks"
        metaDescription="About Smart Craft Woodworks"
      />
      <Navigation activePage="About" />
      <Section variant="gray" fillViewport firstSection>
        <div className={styles.section}>
          <Text t="h1" align="center">
            About
          </Text>
          <Text t="body2">
            With over five years of experience in residential carpentry in San
            Diego, I’ve worked on everything from high-end finish carpentry and
            home renovations to two-story deck builds and ADU additions.
            Throughout my career, I’ve had the opportunity to learn from some of
            the best contractors in the industry while also gaining invaluable
            lessons from hands-on experience. I know the challenges that come
            with every project, and I’m here to help you avoid common mistakes
            while ensuring your vision is brought to life with precision and
            care.
          </Text>
          <Text t="body2">
            I founded Smart Craft Woodworks to bridge the gap between
            contractors, workers, and clients. Too often, I’ve seen contractors
            promise top-tier work only to outsource labor to inexperienced
            workers. When you hire me, you’re getting direct, skilled
            craftsmanship—no middlemen, no shortcuts. I personally oversee every
            step of the project, ensuring high-quality workmanship and clear
            communication so you always know what’s happening with your
            investment.
          </Text>
          <div className="imageContainer">
            <Image
              src="/saw.jpeg"
              alt="About Smart Craft Woodworks"
              width={400}
              height={400}
              className="image"
            />
          </div>
          <Text t="body2">
            What sets me apart is my dedication to organization, safety, and
            efficiency. I’ve worked on job sites where poor planning led to
            wasted materials, messy workspaces, and frustrated clients. I
            prioritize cleanliness, proper dust collection, and structured
            workflows to protect both your home and everyone involved. I don’t
            cut corners, rush jobs for a paycheck, or compromise on quality.
          </Text>
          <Text t="body2">
            When you choose Smart Craft Woodworks, you’re choosing a carpenter
            who values craftsmanship, integrity, and a seamless client
            experience. Let’s build something great together.
          </Text>
        </div>
      </Section>

      <Footer />
    </>
  );
};
