import React from "react";

import { NextPage } from "next";

import { Section, Text } from "components";

// import { Navigation } from "components/Navigation";
// import { Footer } from "components/Footer";
// import { PageHead } from "components/PageHead";
// import { InfoToggle } from "components/InfoToggle";

import * as styles from "./styles";

export const Home: NextPage = () => {
  return (
    <>
      {/* <PageHead
        production={IS_PRODUCTION}
        title="Dating University"
        mediaTitle="Dating University"
        metaDescription="Learn tricks and tips to improve your social life and level up your confidence"
      />
      <Navigation activePage="Home" /> */}
      <Section variant="gray" fillViewport={true}>
        <main className={styles.main}>
          <div className="start">
            <Text t="h1">Welcome to Atte builds.</Text>
          </div>
        </main>
      </Section>

      {/* <Footer /> */}
    </>
  );
};
