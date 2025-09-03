import React from "react";
import styles from "./Skeleton.module.css";
import cn from "classnames";

export interface ISkeletonProps {
  count: number;
  type: "question" | "specialization" | "skills";
}

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
