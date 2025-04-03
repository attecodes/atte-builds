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
  gap: 2rem;
  .imageContainer {
    width: 100%;
    max-width: 300px; /* Set max width as needed */
    height: 300px;
    margin: 0 auto;
  }

  .image {
    width: 100%; /* Ensures the image scales responsively */
    height: auto; /* Maintains the aspect ratio */
    object-fit: cover;
  }
`;
