import React from "react";
import cn from "classnames";
import styles from "./Container.module.css";
import type { IContainerProps } from "./Container.props";

const Container = ({
  children,
  className,
  ...props
}: IContainerProps): React.JSX.Element => {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
