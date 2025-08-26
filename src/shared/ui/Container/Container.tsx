import React from "react";
import cn from "classnames";
import styles from "./Container.module.css";

export interface IContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

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
