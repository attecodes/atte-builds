import { css } from "@emotion/css";
import breakpoints from "lib/theme/breakpoints";

export const main = css`
  grid-column: main;
  display: grid;
  gap: 10rem;
  ${breakpoints.large} {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`;
