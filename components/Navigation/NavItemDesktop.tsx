import React, { FC } from "react";

import Link from "next/link";

import * as styles from "./styles";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  url: string;
  active?: boolean;
}

export const NavItemDesktop: FC<Props> = ({ active, name, url, ...props }) => {
  return (
    <Link legacyBehavior href={url}>
      <a
        {...props}
        className={styles.navMain_DesktopLink}
        href={url}
        data-active={active?.toString()}
      >
        {name}
      </a>
    </Link>
  );
};
