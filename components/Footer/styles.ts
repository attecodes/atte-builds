import { css } from "@emotion/css";
import breakpoints from "lib/theme/breakpoints";

export const footer = css`
  background-color: var(--surface-02);
  grid-column: full;
  padding: 2rem 2.4rem;
  position: relative;
  grid-column: full;
  ${breakpoints.large} {
    padding: 4.8rem 0;
    display: grid;
    grid-template-columns: inherit;
  }
  .footer-container {
    grid-column: main;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .top {
    width: 100%;
  }
  .middle {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    align-items: center;
    justify-content: center;
    ${breakpoints.medium} {
      flex-direction: row;
      gap: 2rem;
      align-items: flex-start;
      justify-content: space-between;
    }

    width: 100%;
  }
  .bottom {
    border-top: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const footer_content = css`
  grid-column: main;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 2.4rem;

  ${breakpoints.medium} {
    justify-content: center;
  }

  ${breakpoints.large} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const footer_nav = css`
  font-size: 1.4rem;
  max-height: 12rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 3.2rem;
  justify-content: center;

  & a {
    color: var(--font-02) !important;
  }

  & a:hover {
    color: var(--font-01) !important;
  }

  ${breakpoints.large} {
    gap: 1.6rem 7rem;
    flex-direction: column;
  }

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.6rem 3.2rem;
  }
`;

export const footer_icons = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  & svg path {
    fill: var(--font-02);
  }

  & svg:hover path {
    fill: var(--font-01);
  }

  ${breakpoints.medium} {
    flex-direction: row;
  }
`;
