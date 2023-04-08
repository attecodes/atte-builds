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
      <Section variant="gray" fillViewport>
        <main className={styles.main}>
          <div className="start">
            <Text t="h1" align="center">
              Welcome to Atte Builds
            </Text>
            <ButtonPrimary
              label="View Projects"
              href="/tech"
              // @ts-ignore
              link={Link}
            />
          </div>
        </main>
      </Section>

      <Footer />
    </>
  );
};
