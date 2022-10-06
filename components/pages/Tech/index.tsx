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

import { TechProjects } from "lib/queries";

import * as styles from "./styles";

type Props = {
  techProjects: TechProjects;
};

export const Tech: FC<Props> = (props) => {
  return (
    <>
      <PageHead
        title="Atte Builds"
        mediaTitle="Atte Builds"
        metaDescription="A showcase of Atte's tech related work"
      />
      <Navigation activePage="Tech" />
      <Section variant="gray" firstSection fillViewport>
        <div className={styles.container}>
          <section className={styles.cardsSection}>
            <div className={styles.articles}>
              <Text t="h4">Tech</Text>
              <ButtonPrimary
                label="Carpentry Projects"
                href="/carpentry"
                // @ts-ignore
                link={Link}
              />
            </div>
            <div className={styles.cards}>
              {props.techProjects.map((techProject) => (
                <Card key={techProject.slug} project={techProject} />
              ))}
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </>
  );
};
