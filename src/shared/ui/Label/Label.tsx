import React from "react";
import styles from "./Label.module.css";
import type { ILabelProps } from "./Label.props";

const Label = ({ children, value }: ILabelProps): React.JSX.Element => {
  return (
    <li className={styles.label}>
      {children} <span className={styles.value}>{value}</span>
    </li>
  );
};

export default Label;
