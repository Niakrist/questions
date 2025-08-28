import React from "react";
import styles from "./Input.module.css";

export interface ISearchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: "search";
  children?: React.ReactNode;
  placeholder: string;
  type: "text";
}

const Input = ({
  name,
  placeholder,
  children,
  type,
}: ISearchProps): React.JSX.Element => {
  return (
    <label className={styles.label} htmlFor={name}>
      {children}
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
