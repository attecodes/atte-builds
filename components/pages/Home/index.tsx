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
