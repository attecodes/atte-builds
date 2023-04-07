import { FC } from "react";

import { HeaderDesktop } from "components/Header/HeaderDesktop";
import { HeaderMobile } from "components/Header/HeaderMobile";

import { NavItemDesktop } from "./NavItemDesktop";
import { NavItemMobile } from "./NavItemMobile";

type PageName = "Home" | "Carpentry" | "Tech";

export type Props = {
  activePage: PageName;
};

export const Navigation: FC<Props> = (props) => {
  return (
    <>
      <HeaderMobile>
        <NavItemMobile url="/" name={"Home"} />
        {/* <NavItemMobile url="/carpentry" name={"Carpentry"} /> */}
        <NavItemMobile url="/tech" name={"Tech"} />
      </HeaderMobile>

      <HeaderDesktop>
        <NavItemDesktop
          url={"/"}
          name={"Home"}
          active={props.activePage === "Home"}
        />
        {/* <NavItemDesktop
          url={"/carpentry"}
          name={"Carpentry"}
          active={props.activePage === "Carpentry"}
        /> */}
        <NavItemDesktop
          url={"/tech"}
          name={"Projects"}
          active={props.activePage === "Tech"}
        />
      </HeaderDesktop>
    </>
  );
};
