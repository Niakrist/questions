import React from "react";
import styles from "./Text.module.css";
import cn from "classnames";

export interface ITextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  color: "white" | "grey" | "black";
  textSize: "small" | "normal" | "big";
  fontWeght: "fw400" | "fw500";
  className?: string;
}

const Text = ({
  children,
  className,
  color,
  textSize,
  fontWeght,
  ...props
}: ITextProps): React.JSX.Element => {
  return (
    <p
      className={cn(
        styles.text,
        {
          [styles.textWhite]: color === "white",
          [styles.textBlack]: color === "black",
          [styles.textGrey]: color === "grey",
          [styles.fw400]: fontWeght === "fw400",
          [styles.fw500]: fontWeght === "fw500",
          [styles.textSmall]: textSize === "small",
          [styles.textNormal]: textSize === "normal",
          [styles.textBig]: textSize === "big",
        },
        className
      )}
      {...props}>
      {children}
    </p>
  );
};

export default Text;
