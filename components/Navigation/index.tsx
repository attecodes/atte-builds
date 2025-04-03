import { FC } from "react";

import { HeaderDesktop } from "components/Header/HeaderDesktop";
import { HeaderMobile } from "components/Header/HeaderMobile";

import { NavItemDesktop } from "./NavItemDesktop";
import { NavItemMobile } from "./NavItemMobile";

type PageName = "Home" | "Gallery" | "Tech" | "Shop" | "About" | "Contact Us";

export type Props = {
  activePage: PageName;
};

export const Navigation: FC<Props> = (props) => {
  return (
    <>
      <HeaderMobile>
        <NavItemMobile url="/" name={"Home"} />
        <NavItemMobile url="/gallery" name={"Gallery"} />
        <NavItemMobile url="/shop" name={"Shop"} />
        <NavItemMobile url="/about" name={"About"} />
        <NavItemMobile url="/contact" name={"Contact Us"} />
      </HeaderMobile>

      <HeaderDesktop>
        <NavItemDesktop
          url={"/"}
          name={"Home"}
          active={props.activePage === "Home"}
        />

        <NavItemDesktop
          url={"/gallery"}
          name={"Gallery"}
          active={props.activePage === "Gallery"}
        />
        <NavItemDesktop
          url={"/shop"}
          name={"Shop"}
          active={props.activePage === "Shop"}
        />
        <NavItemDesktop
          url={"/about"}
          name={"About"}
          active={props.activePage === "About"}
        />
        <NavItemDesktop
          url={"/contact"}
          name={"Contact Us"}
          active={props.activePage === "Contact Us"}
        />
      </HeaderDesktop>
    </>
  );
};
