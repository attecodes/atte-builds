import React, { FC, HTMLProps } from "react";

import { cx } from "@emotion/css";

import * as styles from "./styles";

type Props = HTMLProps<HTMLDivElement> & {
  variant?: "white" | "gray";
  fillViewport?: boolean;
  // set to true if first section so more padding can be added
  firstSection?: boolean;
};

export const Section: FC<Props> = ({
  variant,
  fillViewport,
  firstSection,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cx(
        styles.section,
        variant,
        {
          fillViewport,
          firstSection,
        },
        props.className
      )}
    >
      {props.children}
    </section>
  );
};
