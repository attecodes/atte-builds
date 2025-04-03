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
  .card {
    border: 2px solid black;
    width: max-content;
    padding: 2rem;
    border-radius: 0.2rem;
    background-color: rgba(65, 68, 63, 0.106);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
