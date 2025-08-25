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
}

const Text = ({
  children,
  className,
  ...props
}: ITextProps): React.JSX.Element => {
  return (
    <p className={cn(styles.text, className)} {...props}>
      {children}
    </p>
  );
};

export default Text;
