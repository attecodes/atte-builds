import { css } from "@emotion/css";
import breakpoints from "lib/theme/breakpoints";

export const container = css`
  grid-column: main;
  display: grid;
  grid-template-columns: inherit;
  grid-gap: 1.6rem;
`;

export const cardsSection = css`
  display: grid;
  grid-column: main;
  padding-bottom: 5rem;
  row-gap: 2.4rem;
  grid-template-columns: inherit;
`;

export const articles = css`
  grid-column: full;
  display: flex;
  gap: 2rem;
  align-items: center;
  a {
    transform: scale(0.6);
  }
`;

export const cards = css`
  display: grid;
  grid-column: full;
  grid-template-columns: 1fr;
  .cardsSection {
    grid-column: full;
  }
  ${breakpoints.medium} {
    grid-template-columns: 1fr 1fr;
  }
  row-gap: 2.6rem;
  grid-column-gap: 2.6rem;

  ${breakpoints.large} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
