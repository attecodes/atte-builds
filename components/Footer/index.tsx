import React, { FC } from "react";

import Link from "next/link";

import { GithubIcon, LinkedInIcon } from "lib/Icons";

import * as styles from "./styles";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_content}>
      <nav className={styles.footer_nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/tech">
          <a>Projects</a>
        </Link>
      </nav>
      <nav className={styles.footer_icons}>
        <a
          href="https://www.linkedin.com/in/itslikelatte/"
          rel="noopener noreferrer"
          target="blank"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/attecodes"
          rel="noopener noreferrer"
          target="blank"
        >
          <GithubIcon />
        </a>
      </nav>
    </div>
  </footer>
);
