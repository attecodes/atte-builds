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
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
            <Link legacyBehavior href="/gallery">
              <a>Gallery</a>
            </Link>
            <Link legacyBehavior href="/shop">
              <a>Shop</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a>About</a>
            </Link>
            <Link legacyBehavior href="/contact">
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
        <Text t="body3">Serving San Diego County</Text>
        <Text t="body3">Phone: 619.246.0025</Text>
      </div>
      <div className="bottom">
        <Text t="caption">© 2025 All Rights Reserved | SD Finish</Text>
      </div>
    </div>
  </footer>
);
