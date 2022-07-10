import { css } from "@emotion/css";

import breakpoints from "lib/theme/breakpoints";

export const headerDesktop = css`
  grid-template-columns: inherit;
  grid-column: full;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--surface-02);
  padding-top: 1rem;
  height: calc(var(--header-height) * 2);
  z-index: 1; /* so the drop-shadow is visible over next section */
  display: none;
  ${breakpoints.large} {
    display: grid;
  }
`;

export const headerMobileWrap = css`
  position: fixed;
  pointer-events: none;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.5s ease 0s;
  z-index: 100;
  ${breakpoints.large} {
    display: none;
  }
`;

export const headerMobileWrap_toggled = css`
  ${headerMobileWrap};
  pointer-events: all;
`;

export const headerMobile = css`
  position: relative;
  background-color: var(--surface-02);
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2.2rem;
  height: calc(var(--header-height) * 2);
  z-index: 1;
  .end-buttons {
    display: flex;
    gap: 2rem;
  }
`;

export const menuDesktop = css`
  display: grid;
  grid-column: main;
  grid-template-columns: auto 1fr auto;
  width: 100%;
  align-items: center;
`;

export const navMain_Desktop = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-inline-end: 10rem;
  gap: 2.4rem;
  ${breakpoints.desktopLarge} {
    gap: 5.4rem;
  }
`;

export const navMain_DesktopLink = css`
  text-decoration: none;
  padding: 0 2rem;
  font-weight: bold;
  color: var(--font-01);
  display: flex;
  align-items: center;
`;

export const navMain_Buttons = css`
  box-sizing: border-box;
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  ${breakpoints.large} {
    button,
    a {
      box-shadow: var(--shadow-light);
    }
  }
`;
