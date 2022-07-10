import React, { FC } from "react";

import Link from "next/link";

import { InstagramIcon } from "lib/Icons";

import * as styles from "./styles";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_content}>
      <nav className={styles.footer_nav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/carpentry">
          <a>Carpentry</a>
        </Link>
        <Link href="/tech">
          <a>Tech</a>
        </Link>
      </nav>
      <nav className={styles.footer_icons}>
        <a href="https://www.instagram.com/attemyllykoski">
          <InstagramIcon />
        </a>
      </nav>
    </div>
  </footer>
);
