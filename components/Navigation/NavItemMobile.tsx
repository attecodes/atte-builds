import React, { FC } from "react";

import Link from "next/link";

import * as styles from "./styles";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  url: string;
  number?: string;
}

export const NavItemMobile: FC<Props> = (props) => {
  return (
    <div className={styles.navMain_MobileItem}>
      <Link legacyBehavior href={props.url}>
        <a {...props} className={styles.navMain_MobileLink}>
          <div className={styles.navMain_MobileItemInner}>{props.name}</div>
        </a>
      </Link>
    </div>
  );
};
