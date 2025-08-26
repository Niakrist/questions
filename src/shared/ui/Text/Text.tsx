import React from "react";
import styles from "./Text.module.css";
import cn from "classnames";

export interface ITextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  className?: string;
  color: "white" | "grey" | "black";
  fontWeght: "fw400" | "fw500";
  textSize: "small" | "normal" | "big";
}

const Text = ({
  children,
  className,
  color,
  fontWeght,
  textSize,
  ...props
}: ITextProps): React.JSX.Element => {
  return (
    <p
      className={cn(
        styles.text,
        {
          [styles.textSmall]: textSize === "small",
          [styles.textNormal]: textSize === "normal",
          [styles.textBig]: textSize === "big",

          [styles.textBlack]: color === "black",
          [styles.textGrey]: color === "grey",
          [styles.textWhite]: color === "white",

          [styles.fw400]: fontWeght === "fw400",
          [styles.fw500]: fontWeght === "fw500",
        },
        className
      )}
      {...props}>
      {children}
    </p>
  );
};

export default Text;
