import React, { FC } from "react";

import Link from "next/link";

import { InstagramIcon, YoutubeIcon } from "lib/Icons";

import * as styles from "./styles";
import { Text } from "components/Text";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className="footer-container">
      <div className="top">
        <div className={styles.footer_content}>
          <nav className={styles.footer_nav}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </nav>
          <nav className={styles.footer_icons}>
            <a
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
              target="blank"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/attemyllykoski"
              rel="noopener noreferrer"
              target="blank"
            >
              <InstagramIcon />
            </a>
          </nav>
        </div>
      </div>

      <div className="middle">
        <Text t="body3">Phone: 619.246.0025</Text>
        <Text t="body3">Serving San Diego County</Text>
      </div>
      <div className="bottom">
        <Text t="caption">
          © 2025 All Rights Reserved | Smart Craft Solutions
        </Text>
      </div>
    </div>
  </footer>
);
