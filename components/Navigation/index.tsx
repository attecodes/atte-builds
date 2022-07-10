import { FC } from "react";

import { HeaderDesktop } from "components/Header/HeaderDesktop";
import { HeaderMobile } from "components/Header/HeaderMobile";
import { useWindowSize } from "lib/hooks";

import { NavItemDesktop } from "./NavItemDesktop";
import { NavItemMobile } from "./NavItemMobile";

type PageName = "Home";

export type Props = {
  activePage: PageName;
};

export const Navigation: FC<Props> = (props) => {
  const { isMobile } = useWindowSize();
  return (
    <>
      <HeaderMobile>
        <NavItemMobile url="/" name={"Home"} />
      </HeaderMobile>

      <HeaderDesktop>
        <NavItemDesktop
          url={"/"}
          name={"Home"}
          active={props.activePage === "Home"}
        />
      </HeaderDesktop>
    </>
  );
};
