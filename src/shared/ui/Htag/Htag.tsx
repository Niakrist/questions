import React from "react";
import cn from "classnames";
import styles from "./Htag.module.css";

export interface IHtagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
  tag: "h1" | "h2";
  className?: string;
  sizeText: "medium" | "big";
}

const Htag = ({ tag, sizeText, className, children, ...props }: IHtagProps) => {
  const Tag = tag as keyof React.JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      ...props,
      className: cn(styles.title, className, {
        [styles.bigText]: sizeText === "big",
        [styles.mediumText]: sizeText === "medium",
      }),
    },
    children
  );
};

export default Htag;
