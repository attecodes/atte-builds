import { css } from "@emotion/css";
import breakpoints from "lib/theme/breakpoints";

export const main = css`
  grid-column: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 10rem;
  ${breakpoints.large} {
    display: grid;
    grid-template-areas: "end start";
    gap: 5rem;
  }
  .start {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: start;
  }
  .image {
    border-radius: 1rem;
  }
`;

export const section = css`
  grid-column: main;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  .grid {
    display: grid;
    gap: 5rem;
    ${breakpoints.large} {
      grid-template-columns: 1fr 1fr;
    }
    .start {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .end {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
