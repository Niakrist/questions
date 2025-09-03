import React, { useState } from "react";
import styles from "./CategoryBlock.module.css";
import cn from "classnames";

interface ICategoryBlockProps {
  name: string;
  children: React.ReactNode;
  hasButton?: boolean;
}

const CategoryBlock = ({
  name,
  children,
  hasButton,
}: ICategoryBlockProps): React.JSX.Element => {
  const [isShowAll, setIsShowAll] = useState(false);

  const handleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  return (
    <div>
      <p className={styles.name}>{name}</p>
      <ul className={cn(styles.wrapper, { [styles.showAll]: isShowAll })}>
        {children}
      </ul>
      {hasButton && (
        <button className={styles.button} onClick={handleShowAll}>
          {isShowAll ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
};

export default CategoryBlock;
