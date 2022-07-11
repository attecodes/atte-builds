import { css } from "@emotion/css";

import { button } from "lib/theme/typography";

export const button_primary = css`
  ${button};
  width: fit-content;
  display: flex;
  padding: 0rem 2.4rem;
  align-items: center;
  justify-content: center;
  appearance: none;
  text-decoration: none;
  text-align: center;
  /* min-height to conform with Lighthouse min tap-target */
  min-height: 4.8rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: opacity 0.3s ease 0s;
  background-color: #333;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    opacity: 0.6;
  }

  &,
  &:hover:not(:disabled),
  &:visited {
    color: white; /* same in darkmode */
  }

  &:disabled {
    background-color: var(--surface-03);
    cursor: not-allowed;
    color: var(--font-02);
  }
`;

export const button_gray = css`
  background-color: var(--surface-01);
  color: var(--font-02);

  &,
  &:hover,
  &:hover:not(:disabled),
  &:visited {
    color: var(--font-02); /* same in darkmode */
  }
`;
