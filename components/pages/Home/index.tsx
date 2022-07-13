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
} from "components";

import * as styles from "./styles";

export const Home: NextPage = () => {
  return (
    <>
      <PageHead
        title="Atte Builds"
        mediaTitle="Atte Builds"
        metaDescription="Home page for Atte Builds"
      />
      <Navigation activePage="Home" />
      <Section variant="gray">
        <main className={styles.main}>
          <div className="start">
            <Text t="h1">👋 Welcome to Atte builds</Text>
          </div>
          <div className="end">
            <Image
              className="image"
              src="/atte.jpg"
              alt="Atte the man himself"
              width={320}
              height={425}
            />
          </div>
        </main>
      </Section>
      <Section>
        <div className={styles.section}>
          <Text t="h2" align="center">
            About
          </Text>
          <div className="grid">
            <div className="start">
              <Text>
                Thanks for stopping by, I am Atte a 27 year old and I created
                this website to have a place where I can showcase who I am and
                what type of work I am interested in.
              </Text>
              <Text>
                After High School I went to UC Riverside and got a Bachelors in
                Computer Science. After that I joined ESRI, a big map based tech
                company. I was at ESRI for two and a half years where I worked
                on the{" "}
                <a
                  href="https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/overview"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  ARCGIS Story Maps
                </a>{" "}
                team and we were building a dynamic and interactive story
                telling web application.
              </Text>
              <Text>
                During this time I started getting interested in houses, tools
                and all the different processes it takes to build a house.
              </Text>
            </div>
            <div className="end">
              <Text>
                To tie all my passions together, I have realized that I have a
                curious brain that loves to learn new things and the theme of
                the things I like is building.
              </Text>
              <Text>
                Building to me is: taking a bunch of smaller components
                (physical or virtual) and creating a complex system where
                everything comes together. Building is creating useful solutions
                that can benefit others and I find extreme joy in this.
              </Text>
              <Text>
                I take pride in my work and I believe the work you do is your
                signature so I would not ever want to do a half ass job.
              </Text>
            </div>
          </div>
          <ButtonPrimary
            label="View Projects"
            href="/carpentry"
            // @ts-ignore
            link={Link}
          />
        </div>
      </Section>
      <Footer />
    </>
  );
};
