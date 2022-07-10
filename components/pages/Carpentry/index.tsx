import React from "react";

import { NextPage } from "next";

import { Section, Text, PageHead, Navigation, Footer } from "components";

import * as styles from "./styles";

export const Carpentry: NextPage = () => {
  return (
    <>
      <PageHead
        title="Atte Builds"
        mediaTitle="Atte Builds"
        metaDescription="A showcase of Atte's carpentry work"
      />
      <Navigation activePage="Carpentry" />
      <Section variant="gray" fillViewport={true}>
        <main className={styles.main}>
          <div className="start">
            <Text t="h1">Carpentry</Text>
          </div>
        </main>
      </Section>

      <Footer />
    </>
  );
};
