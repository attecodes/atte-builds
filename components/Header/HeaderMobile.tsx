import React, { FC, useState } from "react";

// import Image from "next/image";
// import Link from "next/link";

import { ToggleNavButton, NavMobile } from "components";

import * as styles from "./styles";

interface Props {
  buttons?: any;
  children?: any;
}

export const HeaderMobile: FC<Props> = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className={
        isToggled ? styles.headerMobileWrap_toggled : styles.headerMobileWrap
      }
    >
      <header className={styles.headerMobile}>
        <div className="logo">
          {/* <Link href={"/"}>
            <a>
              <Image
                src={isDarkTheme ? "/logo_dark.png" : "/logo_light.png"}
                alt="Dating University Logo"
                width={86}
                height={86}
              />
            </a>
          </Link> */}
        </div>
        <div className="end-buttons">
          {props.buttons && (
            /* @ts-ignore */
            <div className={styles.navMain_Buttons}>{props.buttons}</div>
          )}
          <ToggleNavButton
            isToggled={isToggled}
            onClick={() => setIsToggled((isToggled) => !isToggled)}
          />
        </div>
      </header>
      <NavMobile isToggled={isToggled}>{props.children}</NavMobile>
    </div>
  );
};
