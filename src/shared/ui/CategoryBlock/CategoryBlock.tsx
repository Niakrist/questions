import React, { useState } from "react";
import styles from "./CategoryBlock.module.css";
import cn from "classnames";
import type { ICategoryBlockProps } from "./CategoryBlock.props";

const CategoryBlock = ({
  name,
  children,
  hasButton,
  ...props
}: ICategoryBlockProps): React.JSX.Element => {
  const [isShowAll, setIsShowAll] = useState(false);

  const handleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  return (
    <div {...props}>
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
