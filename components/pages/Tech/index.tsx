import React from "react";

import { NextPage } from "next";

import { Section, Text, PageHead, Navigation, Footer } from "components";

import * as styles from "./styles";

export const Tech: NextPage = () => {
  return (
    <>
      <PageHead
        title="Atte Builds"
        mediaTitle="Atte Builds"
        metaDescription="A showcase of Atte's tech related work"
      />
      <Navigation activePage="Tech" />
      <Section variant="gray" fillViewport={true} firstSection={true}>
        <main className={styles.main}>
          <div className="start">
            <Text t="h1">Tech</Text>
            <Text t="body1">[coming soon]</Text>
          </div>
        </main>
      </Section>

      <Footer />
    </>
  );
};
