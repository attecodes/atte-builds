import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Text } from "components";
import { CarpentryProjectDetails } from "lib/queries";

import styles from "./index.module.css";

interface CardProps {
  carpentryProject: CarpentryProjectDetails;
}

export function Card(props: CardProps) {
  const date = new Date(props.carpentryProject.publishedAt).toLocaleDateString(
    "en"
  );

  return (
    <div>
      <Link href={`/carpentry/${props.carpentryProject.slug}`}>
        <a className={styles.card}>
          <div className={styles.content}>
            <Text t="caption" className={styles.date}>
              Published: {date}
            </Text>
            <Text t="body1">{props.carpentryProject.title}</Text>
            <Text
              t="caption"
              className={styles.read_more}
              style={{ marginTop: "auto" }}
            >
              Read more
            </Text>
          </div>
          <div className={styles.image}>
            <Image
              src={props.carpentryProject.imageUrl || "/logo_dark.png"}
              alt={props.carpentryProject.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
