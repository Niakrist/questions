import React from "react";
import styles from "./Label.module.css";
import type { ILabelProps } from "./Label.props";

const Label = ({ name, value, ...props }: ILabelProps): React.JSX.Element => {
  return (
    <p {...props} className={styles.label}>
      <span> {name}</span> <span className={styles.value}>{value}</span>
    </p>
  );
};

export default Label;
