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

interface CarpentryProjectProps {
  carpentryProject?: Project;
}

export const ProjectPage = (props: CarpentryProjectProps) => {
  const [renderClientSideComponent, setRenderClientSideComponent] =
    useState(false);
  useEffect(() => {
    setRenderClientSideComponent(true);
  }, []);
  if (!props.carpentryProject) {
    return (
      <>
        <Navigation activePage="Carpentry" />
        <div className={styles.fallbackContainer}>
          <Text className={styles.loadingArticle}>Loading article...</Text>
        </div>
        <Footer />
      </>
    );
  }

  const publishedDate = `Published ${new Date(
    props.carpentryProject.publishedAt
  ).toDateString()}`;

  return (
    <>
      <PageHead
        title={props.carpentryProject.title}
        mediaTitle={props.carpentryProject.title}
        metaDescription={props.carpentryProject.title}
        mediaImageSrc={props.carpentryProject.imageUrl}
      />

      {renderClientSideComponent && <Navigation activePage="Carpentry" />}

      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerImage}>
            <Image
              priority={true}
              src={props.carpentryProject.imageUrl || "/logo_dark.png"}
              alt={props.carpentryProject.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <section className={styles.blogContainer}>
          <div className={styles.content}>
            <Link href="/carpentry" passHref={true}>
              <a className={styles.backNavLink}>Back to projects</a>
            </Link>

            <Text t="h2" as="h1">
              {props.carpentryProject.title}
            </Text>

            <Text t="h5" as="p" className={styles.date}>
              {publishedDate}
            </Text>
            <BlockContentRenderer blocks={props.carpentryProject.body} />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
