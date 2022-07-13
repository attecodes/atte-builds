import { css } from "@emotion/css";

import * as typography from "lib/theme/typography";
import breakpoints from "lib/theme/breakpoints";

export const heading = css`
  margin: 4.8rem 0 3.2rem;
`;

export const paragraph = css`
  margin: 2rem 0;
`;

export const blockQuote = css`
  border-left: 1rem solid #333;
  margin: 1.5em 1rem;
  padding: 0.5em 1rem;
  &:before {
    color: #333;
    content: open-quote;
    font-size: 4rem;
    line-height: 1rem;
    margin-right: 0.25rem;
    vertical-align: -0.4rem;
  }
`;

export const inlineImage = css`
  margin: auto;
`;

export const link = css`
  text-decoration: underline;
  color: blue;
  word-break: break-word;
  &:visited {
    color: blue;
  }
`;
export const button = css`
  margin: 4rem 0rem;
`;

export const li = css`
  margin-bottom: 1.5rem;
  line-height: 3.4rem;
  ${typography.body2}
  ${breakpoints.large} {
    line-height: 3.8rem;
  }
`;

export const ul = css`
  margin: 2rem;
  margin-inline-start: 1.5rem;
  color: var(--font-01);
`;

export const ol = css`
  ${typography.body2}
  margin: 2rem 0;
  margin-inline-start: 3.5rem;
  color: var(--font-01);
`;

export const nestedUl = css`
  list-style-type: "- ";
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const nestedOl = css`
  ${typography.body2}
  list-style-type: lower-alpha;
  margin-inline-start: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  list-style-position: outside;
`;
