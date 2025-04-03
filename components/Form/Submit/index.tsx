import React, { InputHTMLAttributes } from "react";

import * as styles from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FormSubmit = (props: InputProps) => {
  return (
    <input
      {...props}
      type="submit"
      className={styles.submit}
      value={props.label || "Send Message"}
    />
  );
};
