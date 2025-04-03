import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Project } from "lib/queries";

import {
  Text,
  BlockContentRenderer,
  Navigation,
  PageHead,
  Footer,
} from "components";

import * as styles from "./styles";

interface TechProjectProps {
  techProject?: Project;
}

export const ProjectPage = (props: TechProjectProps) => {
  const [renderClientSideComponent, setRenderClientSideComponent] =
    useState(false);
  useEffect(() => {
    setRenderClientSideComponent(true);
  }, []);
  if (!props.techProject) {
    return (
      <>
        <Navigation activePage="Tech" />
        <div className={styles.fallbackContainer}>
          <Text className={styles.loadingArticle}>Loading articles...</Text>
        </div>
        <Footer />
      </>
    );
  }

  const publishedDate = `Published ${new Date(
    props.techProject.publishedAt
  ).toDateString()}`;

  return (
    <>
      <PageHead
        title={props.techProject.title}
        mediaTitle={props.techProject.title}
        metaDescription={props.techProject.title}
        mediaImageSrc={props.techProject.imageUrl}
      />

      {renderClientSideComponent && <Navigation activePage="Tech" />}

      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerImage}>
            <Image
              priority={true}
              src={props.techProject.imageUrl || "/logo_dark.png"}
              alt={props.techProject.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <section className={styles.blogContainer}>
          <div className={styles.content}>
            <Link legacyBehavior href="/tech" passHref={true}>
              <a className={styles.backNavLink}>Back to projects</a>
            </Link>

            <Text t="h2" as="h1">
              {props.techProject.title}
            </Text>

            <Text t="h5" as="p" className={styles.date}>
              {publishedDate}
            </Text>
            <BlockContentRenderer blocks={props.techProject.body} />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
