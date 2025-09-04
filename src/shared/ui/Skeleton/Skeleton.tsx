import React from "react";
import cn from "classnames";
import type { ISkeletonProps } from "./Skeleton.props";
import styles from "./Skeleton.module.css";

const Skeleton = ({ count, type }: ISkeletonProps): React.JSX.Element => {
  return (
    <ul className={cn(styles.list, { [styles.row]: type === "skills" })}>
      {Array.from({ length: count }, (_, index) => (
        <li
          key={index + 1}
          className={cn({
            [styles.question]: type === "question",
            [styles.specialization]: type === "specialization",
            [styles.skills]: type === "skills",
          })}></li>
      ))}
    </ul>
  );
};

export default Skeleton;
