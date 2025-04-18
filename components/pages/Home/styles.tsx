import { css } from "@emotion/css";
import breakpoints from "lib/theme/breakpoints";

export const main = css`
  grid-template-columns: inherit;
  grid-column: full;
  ${breakpoints.large} {
    display: grid;
  }
`;
export const section = css`
  grid-column: main;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    align-items: center;
    gap: 20px; /* Adds space between logos */
    margin-bottom: 2rem;
  }

  .logo-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
    gap: 20px; /* Adds space between logos */
  }

  .logo-wrapper {
    position: relative;
    width: 300px; /* Set width of the logos */
    height: 150px; /* Set height */
    justify-content: center;
    align-self: center;
    object-fit: contain;
  }
`;
