import React from "react";
import styles from "./WrapperBlock.module.css";
import type { IWrapperBlockProps } from "./WrapperBlock.props";

const WrapperBlock = ({
  children,
  ...props
}: IWrapperBlockProps): React.JSX.Element => {
  return (
    <div {...props} className={styles.wrapperBlock}>
      {children}
    </div>
  );
};

export default WrapperBlock;
