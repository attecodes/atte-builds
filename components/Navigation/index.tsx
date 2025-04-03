import { FC } from "react";

import { HeaderDesktop } from "components/Header/HeaderDesktop";
import { HeaderMobile } from "components/Header/HeaderMobile";

import { NavItemDesktop } from "./NavItemDesktop";
import { NavItemMobile } from "./NavItemMobile";

type PageName = "Home" | "Tech";

export type Props = {
  activePage: PageName;
};

export const Navigation: FC<Props> = (props) => {
  return (
    <>
      <HeaderMobile>
        <NavItemMobile url="/" name={"Home"} />
        <NavItemMobile url="/tech" name={"Tech"} />
      </HeaderMobile>

      <HeaderDesktop>
        <NavItemDesktop
          url={"/"}
          name={"Home"}
          active={props.activePage === "Home"}
        />

        <NavItemDesktop
          url={"/tech"}
          name={"gallery"}
          active={props.activePage === "Tech"}
        />
        <NavItemDesktop
          url={"/tech"}
          name={"Shop"}
          active={props.activePage === "Tech"}
        />
        <NavItemDesktop
          url={"/tech"}
          name={"about"}
          active={props.activePage === "Tech"}
        />
        <NavItemDesktop
          url={"/tech"}
          name={"contact us"}
          active={props.activePage === "Tech"}
        />
      </HeaderDesktop>
    </>
  );
};
