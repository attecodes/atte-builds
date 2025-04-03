import React, { FC } from "react";

// import Image from "next/image";

import * as styles from "./styles";

interface Props {
  buttons?: JSX.Element[];
  children?: JSX.Element | JSX.Element[];
}

export const HeaderDesktop: FC<Props> = (props) => {
  return (
    <header className={styles.headerDesktop}>
      <nav className={styles.menuDesktop}>
        {/* <div className="logo">
          <Link href={"/"}>
            <a>
              <Image
                src={isDarkTheme ? "/logo_dark.png" : "/logo_light.png"}
                alt="Dating University Logo"
                width={96}
                height={96}
              />
            </a>
          </Link>
        </div> */}
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
