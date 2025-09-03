import React from "react";
import styles from "./Input.module.css";
import type { IInputProps } from "./Input.props";

const Input = ({
  name,
  children,
  defaultValue,
  ...props
}: IInputProps): React.JSX.Element => {
  return (
    <label className={styles.label} htmlFor={name}>
      {children}
      <input
        {...props}
        className={styles.input}
        defaultValue={defaultValue}
        name={name}
      />
    </label>
  );
};

export default Input;
