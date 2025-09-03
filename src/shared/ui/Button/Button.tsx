import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import type { IButtonProps } from "./Button.props";

const Button = ({
  children,
  color,
  bgColor,
  fontWeight,
  textSize,
  className,
  borderRadius,
  underline,
  ...props
}: IButtonProps): React.JSX.Element => {
  return (
    <button
      {...props}
      className={cn(
        styles.button,
        {
          [styles.textSmall]: textSize === "small",
          [styles.textNormal]: textSize === "normal",
          [styles.textBig]: textSize === "big",
          [styles.textLarge]: textSize === "large",
          [styles.textPurple]: color === "purple",
          [styles.textBlack]: color === "black",
          [styles.textWhite]: color === "white",
          [styles.bgPurple]: bgColor === "purple",
          [styles.bgTransparent]: bgColor === "transparent",
          [styles.fw400]: fontWeight === "fw400",
          [styles.fw500]: fontWeight === "fw500",
          [styles.fw600]: fontWeight === "fw600",
          [styles.br2]: borderRadius === "br2",
          [styles.br12]: borderRadius === "br12",
          [styles.underline]: underline,
        },
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
