import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Text } from "components";
import { ProjectDetails } from "lib/queries";

import styles from "./index.module.css";

interface CardProps {
  project: ProjectDetails;
  type: "carpentry" | "tech";
}

export function Card(props: CardProps) {
  const date = new Date(props.project.publishedAt).toLocaleDateString("en");

  return (
    <div>
      <Link href={`/${props.type}/${props.project.slug}`}>
        <a className={styles.card}>
          <div className={styles.content}>
            <Text t="caption" className={styles.date}>
              Published: {date}
            </Text>
            <Text t="body1">{props.project.title}</Text>
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
              src={props.project.imageUrl || "/logo_dark.png"}
              alt={props.project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
