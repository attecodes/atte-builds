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
        title="SD Finish"
        mediaTitle="SD Finish"
        metaDescription="Home page for SD Finish"
      />
      <Navigation activePage="Home" />
      <Section variant="gray" firstSection>
        <div className={styles.section}>
          {/* <Image
            src={"/logo2.png"}
            width={300}
            height={300}
            alt="smartcraft logo"
          /> */}
          <Text t="h1" align="center">
            Welcome to SD Finish Woodworks
          </Text>
          <Text t="body2">
            At SDFinish, we specialize in custom decks, stairs, and high-quality
            finish work, including doors, trim, and everything wood. Whether
            it’s a new build or a detailed renovation, our team brings
            precision, passion, and expert craftsmanship to every project. From
            outdoor structures to interior finishes, we’re committed to creating
            durable, beautiful results that stand the test of time.
          </Text>
        </div>
      </Section>
      <Section>
        <div className={styles.section}>
          <Text t="h3" align="center">
            Main Services
          </Text>
          <div className="services">
            <Text>Decks</Text>
            <Text>Stairs</Text>
            <Text>Trim</Text>
            <Text>Doors</Text>
          </div>
          <Text t="h3" align="center">
            Other Services
          </Text>
          <div className="services">
            <Text>Drywall Repair</Text>
            <Text>Wood Restoration</Text>
            <Text>Painting</Text>
            <Text>Flooring</Text>
            <Text>Framing</Text>
            <Text>Roof repair</Text>
            <Text>Junk removal</Text>
            <Text>Cabinets</Text>
            <Text>Custom Furniture</Text>
            <Text>Siding</Text>
            <Text>Pergola</Text>
          </div>
          <Text t="h3" align="start">
            What sets SD Finish apart?
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
                src="/brands/sawstop.webp"
                alt="SawStop logo"
                width={300}
                height={150}
                objectFit="contain"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src="/brands/milwaukee.png"
                alt="Milwaukee logo"
                width={300}
                height={150}
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/sketchup.png"}
                width={300}
                height={150}
                alt="sketchup logo"
              />
            </div>

            <div className="logo-wrapper">
              <Image
                src={"/brands/fastcap.jpg"}
                width={300}
                height={150}
                alt="fastcap logo"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/dewalt.png"}
                width={300}
                height={150}
                alt="dewalt logo"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/Festool.png"}
                width={300}
                height={150}
                alt="festool logo"
                objectFit="contain"
              />
            </div>
            <div className="logo-wrapper">
              <Image
                src={"/brands/timbertech.png"}
                width={300}
                height={150}
                alt="timbertech logo"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};
