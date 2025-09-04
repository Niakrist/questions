import React from "react";
import cn from "classnames";
import type { ITextProps } from "./Text.props";
import styles from "./Text.module.css";

const Text = ({
  children,
  className,
  color,
  textSize,
  fontWeight,
  ...props
}: ITextProps): React.JSX.Element => {
  return (
    <p
      {...props}
      className={cn(
        styles.text,
        {
          [styles.textWhite]: color === "white",
          [styles.textBlack]: color === "black",
          [styles.textGrey]: color === "grey",
          [styles.fw400]: fontWeight === "fw400",
          [styles.fw500]: fontWeight === "fw500",
          [styles.textSmall]: textSize === "small",
          [styles.textNormal]: textSize === "normal",
          [styles.textBig]: textSize === "big",
        },
        className
      )}>
      {children}
    </p>
  );
};

export default Text;
