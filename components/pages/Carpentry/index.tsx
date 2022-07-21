import React, { FC } from "react";

import Link from "next/link";

import {
  Section,
  Text,
  PageHead,
  Navigation,
  Footer,
  Card,
  ButtonPrimary,
} from "components";

import { CarpentryProjects } from "lib/queries";

import * as styles from "./styles";

type Props = {
  carpentryProjects: CarpentryProjects;
};

export const Carpentry: FC<Props> = (props) => {
  return (
    <>
      <PageHead
        title="Atte Builds"
        mediaTitle="Atte Builds"
        metaDescription="A showcase of Atte's carpentry related work"
      />
      <Navigation activePage="Carpentry" />
      <Section variant="gray" firstSection fillViewport>
        <div className={styles.container}>
          <section className={styles.cardsSection}>
            <div className={styles.articles}>
              <Text t="h4">Carpentry</Text>
              <ButtonPrimary
                label="Tech Projects"
                href="/tech"
                // @ts-ignore
                link={Link}
              />
            </div>
            <div className={styles.cards}>
              {props.carpentryProjects.map((carpentryProject) => (
                <Card
                  key={carpentryProject.slug}
                  carpentryProject={carpentryProject}
                />
              ))}
            </div>
          </section>
        </div>
      </Section>

      <Footer />
    </>
  );
};
