import { css } from "@emotion/css";

import { button } from "lib/theme/typography";

export const submit = css`
  ${button};
  width: fit-content;
  display: flex;
  padding: 0rem 2.4rem;
  margin: 2rem 0;
  align-items: center;
  justify-content: center;
  appearance: none;
  text-decoration: none;
  /* min-height to conform with Lighthouse min tap-target */
  min-height: 4.8rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: opacity 0.3s ease 0s;
  background-color: #004aad;
  border: none;

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
