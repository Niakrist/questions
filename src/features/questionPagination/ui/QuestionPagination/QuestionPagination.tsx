import React from "react";
import { useAppSelector } from "@/app/store/hooks";
import { useQuestionFilters } from "@/features";
import { Pagination } from "@/shared/ui";
import type { IQuestionPaginationProps } from "./QuestionPagination.props";

const QuestionPagination = ({
  limit,
  totalItems,
}: IQuestionPaginationProps): React.JSX.Element => {
  const { page } = useAppSelector((state) => state.questionFilters);
  const { handleChangeItemFilter } = useQuestionFilters();
  const quantityPage = Math.ceil(totalItems / limit);

  const pages = Array.from({ length: quantityPage }, (_, index) =>
    String(index + 1)
  );

  const cropPages =
    Number(page) < 4
      ? pages.slice(0, 7)
      : pages.slice(Number(page) - 4, Number(page) + 3);

  const handleChange = (page: number) => {
    handleChangeItemFilter("page", String(page));
  };

  return (
    <Pagination
      currentPage={page}
      totalItems={totalItems || 1}
      handleChange={handleChange}
      quantityPage={quantityPage}
      pages={cropPages || pages}
    />
  );
};

export default QuestionPagination;
