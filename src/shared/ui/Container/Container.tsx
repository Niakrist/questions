import React from "react";
import cn from "classnames";
import type { IContainerProps } from "./Container.props";
import styles from "./Container.module.css";

const Container = ({
  children,
  className,
  ...props
}: IContainerProps): React.JSX.Element => {
  return (
    <div {...props} className={cn(styles.container, className)}>
      {children}
    </div>
  );
};

export default Container;
