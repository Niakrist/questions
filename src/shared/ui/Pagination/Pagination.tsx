import React from "react";
import styles from "./Pagination.module.css";
import { useAppSelector } from "@/app/store/hooks";
import cn from "classnames";
import Icon from "../Icon/Icon";
import type { IQuestionFilter } from "@/shared/interface";

export interface IPaginationProps {
  totalQuestion: number;
  limit: number;
  keyValue: keyof IQuestionFilter;
  handleChange: (keyValue: keyof IQuestionFilter, value: string) => void;
}

const Pagination = ({
  totalQuestion,
  limit,
  keyValue,
  handleChange,
}: IPaginationProps): React.JSX.Element => {
  const { page } = useAppSelector((state) => state.questionFilters);
  const quantityPage = Math.ceil(totalQuestion / limit);

  const pages = Array.from({ length: quantityPage }, (_, index) =>
    String(index + 1)
  );

  const cropPages = pages.slice(0, 5);

  const handleChangePage = (p: string) => {
    handleChange(keyValue, p);
  };

  const handleNextPage = () => {
    if (Number(page) <= quantityPage) {
      handleChange(keyValue, String(Number(page) + 1));
    }
  };

  const handlePrevPage = () => {
    if (Number(page) > 1) {
      handleChange(keyValue, String(Number(page) - 1));
    }
  };

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button
          onClick={handlePrevPage}
          className={cn(styles.btnArrow, {
            [styles.disabled]: Number(page) <= 1,
          })}>
          <Icon name="iconArrowRound" />
        </button>
      </li>
      {cropPages.map((p) => (
        <li className={styles.item} key={p}>
          <button
            onClick={() => handleChangePage(p)}
            className={cn(styles.button, { [styles.active]: p === page })}>
            {p}
          </button>
        </li>
      ))}
      <li className={styles.item}>
        <button
          onClick={handleNextPage}
          className={cn(styles.btnArrow, styles.right, {
            [styles.disabled]: Number(page) >= quantityPage,
          })}>
          <Icon name="iconArrowRound" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
