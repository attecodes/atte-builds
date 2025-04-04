import React, { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import * as styles from "./styles";

interface Props {
  buttons?: any;
  children?: any;
}

export const HeaderDesktop: FC<Props> = (props) => {
  return (
    <header className={styles.headerDesktop}>
      <nav className={styles.menuDesktop}>
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={"/logo2.png"}
              alt="SmartCraftSolutions Logo"
              width={96}
              height={96}
            />
          </Link>
        </div>
        {/* @ts-ignore */}
        <div className={styles.navMain_Desktop}>{props.children}</div>
        {props.buttons && (
          /* @ts-ignore */
          <div className={styles.navMain_Buttons}>{props.buttons}</div>
        )}
      </nav>
    </header>
  );
};
