import React from "react";
import styles from "./WrapperBlock.module.css";

export interface IWrapperBlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const WrapperBlock = ({
  children,
  ...props
}: IWrapperBlockProps): React.JSX.Element => {
  return (
    <div className={styles.wrapperBlock} {...props}>
      {children}
    </div>
  );
};

export default WrapperBlock;
