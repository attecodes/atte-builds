import React from "react";

import { NextPage } from "next";

import { Section, Text, PageHead, Navigation, Footer } from "components";

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
      <Section variant="gray" fillViewport={true}>
        <main className={styles.main}>
          <div className="start">
            <Text t="h1">Welcome to Atte builds.</Text>
          </div>
        </main>
      </Section>

      <Footer />
    </>
  );
};
