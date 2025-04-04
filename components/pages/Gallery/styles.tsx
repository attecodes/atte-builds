import { css } from "@emotion/css";

export const main = css`
  grid-column: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const section = css`
  grid-column: main;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  .wide {
    width: 100%;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(200px, 1fr)
    ); /* Adjust min width */
    gap: 0.4rem; /* Spacing between images */
    width: 100%;
  }

  .gallery-item {
    width: 100%; /* Make sure images fill their container */
    height: auto;
    object-fit: cover;
    margin: 0.2rem;
  }
  .img-responsive {
    object-fit: cover;
  }
`;
