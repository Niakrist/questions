import React from "react";
import styles from "./Skeleton.module.css";
import cn from "classnames";

export interface ISkeletonProps {
  count: number;
  type: "question" | "specialization";
}

const Skeleton = ({ count, type }: ISkeletonProps): React.JSX.Element => {
  return (
    <ul className={styles.list}>
      {Array.from({ length: count }, (_, index) => (
        <li
          key={index + 1}
          className={cn({
            [styles.question]: type === "question",
            [styles.specialization]: type === "specialization",
          })}></li>
      ))}
    </ul>
  );
};

export default Skeleton;
