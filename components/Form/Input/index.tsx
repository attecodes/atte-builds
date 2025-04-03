import { Text } from "components";
import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

import * as styles from "./styles";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  label: string;
  ref: string;
  errors?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, errors, ...otherProps },
  ref
) => {
  if (otherProps.type === "textArea") {
    return (
      <div className={styles.formGroup}>
        {errors && (
          <Text color="danger" t="caption">
            {errors}
          </Text>
        )}
        <textarea className="form_field" {...otherProps} name={name} />
        <label className="form_label" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className={styles.formGroup}>
      {errors && (
        <Text color="danger" t="caption">
          {errors}
        </Text>
      )}
      <input className="form_field" {...otherProps} name={name} ref={ref} />
      <label className="form_label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export const FormInput = React.forwardRef(Input);
