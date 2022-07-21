import { css } from "@emotion/css";

import breakpoints from "lib/theme/breakpoints";

export const gridContainer = css`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1.6rem, 1fr)
    [main-start] minmax(0, 107.2rem)
    [main-end] minmax(1.6rem, 1fr)
    [full-end];

  ${breakpoints.small} {
    grid-template-columns:
      [full-start] minmax(2.2rem, 1fr)
      [main-start] minmax(0, 107.2rem)
      [main-end] minmax(3.2rem, 1fr)
      [full-end];
  }
`;

export const section = css`
  grid-column: full;
  display: grid;
  grid-template-columns: inherit;
  background-color: var(--surface-01);
  padding: 8.2rem 0rem;

  &.gray {
    background-color: var(--surface-02);
  }
  &.fillViewport {
    min-height: 100vh;
    align-items: flex-start;
  }
  ${breakpoints.large} {
    padding: 12.2rem 0rem;
  }
  &.firstSection {
    padding-top: 15.2rem;
    ${breakpoints.small} {
      padding-top: 12.2rem;
    }
  }
`;
