import React from "react";
import cn from "classnames";
import Icon from "../Icon/Icon";
import type { IPaginationProps } from "./Pagination.props";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPage,
  totalItems,
  quantityPage,
  handleChange,
  pages,
}: IPaginationProps): React.JSX.Element => {
  const handleChangePage = (p: number) => {
    if (p >= 1 && p <= totalItems) {
      handleChange(p);
    }
  };

  return quantityPage > 1 ? (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button
          onClick={() => handleChangePage(Number(currentPage) - 1)}
          className={cn(styles.btnArrow, {
            [styles.disabled]: Number(currentPage) <= 1,
          })}>
          <Icon name="iconArrowRound" />
        </button>
      </li>
      {pages.map((p) => (
        <li className={styles.item} key={p}>
          <button
            onClick={() => handleChangePage(Number(p))}
            className={cn(styles.button, {
              [styles.active]: p === currentPage,
            })}>
            {p}
          </button>
        </li>
      ))}
      <li className={styles.item}>
        <button
          onClick={() => handleChangePage(Number(currentPage) + 1)}
          className={cn(styles.btnArrow, styles.right, {
            [styles.disabled]: Number(currentPage) >= quantityPage,
          })}>
          <Icon name="iconArrowRound" />
        </button>
      </li>
    </ul>
  ) : (
    <></>
  );
};

export default Pagination;
