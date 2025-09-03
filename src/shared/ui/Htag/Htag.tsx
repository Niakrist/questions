import React from "react";
import cn from "classnames";
import styles from "./Htag.module.css";
import type { IHtagProps } from "./Htag.props";

const Htag = ({
  tag: Tag,
  sizeText,
  className,
  children,
  ...props
}: IHtagProps): React.JSX.Element => {
  return (
    <Tag
      {...props}
      className={cn(styles.title, className, {
        [styles.bigText]: sizeText === "big",
        [styles.mediumText]: sizeText === "medium",
      })}>
      {children}
    </Tag>
  );
};

export default Htag;
