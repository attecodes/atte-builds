import React, { FC } from "react";

import { Section, Text, PageHead, Navigation, Footer, Card } from "components";
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
        metaDescription="A showcase of Atte's carpentry work"
      />
      <Navigation activePage="Carpentry" />
      <Section variant="gray" firstSection>
        <div className={styles.container}>
          <section className={styles.cardsSection}>
            <Text t="h3" className={styles.articles}>
              Atte&apos;s latest carpentry projects
            </Text>
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
