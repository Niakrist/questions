import React from "react";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { Button, Htag, Pagination, Skeleton, Text } from "@/shared/ui";
import { QuestionItem } from "@/entities";
import { QuestionFilter } from "@/widgets";
import { useLocation } from "react-router-dom";
import { useQuestionFilters, useResetFilter } from "@/features";
import styles from "./QuestionsListPage.module.css";

const QuestionsListPage = (): React.JSX.Element => {
  const { search } = useLocation();
  const { data, isLoading } = useGetQuestionsQuery(search ? search : "");
  const questionList = data?.data;
  const totalQuestion = data?.total;
  const limit = data?.limit;
  const { handleChangeItemFilter } = useQuestionFilters();
  const resetFilter = useResetFilter();

  return (
    <>
      <article className={styles.article}>
        <Htag className={styles.title} tag="h1" sizeText="big">
          Вопросы React, JavaScript
        </Htag>
        {isLoading ? (
          <Skeleton count={10} type="question" />
        ) : questionList?.length ? (
          <ul>
            {questionList?.map((question) => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </ul>
        ) : (
          <>
            <Text
              className={styles.text}
              color="black"
              fontWeight="fw500"
              textSize="big">
              К сожалению, по запросу ничего не найдено. Попробуйте изменить
              запрос или воспользуйтесь нашими категориями
            </Text>
            <Button
              onClick={resetFilter}
              className={styles.button}
              bgColor="transparent"
              color="purple"
              borderRadius="br12"
              fontWeight="fw400"
              textSize="normal">
              Сбросить фильтр
            </Button>
          </>
        )}

        <Pagination
          keyValue="page"
          handleChange={handleChangeItemFilter}
          totalQuestion={totalQuestion || 1}
          limit={limit || 10}
        />
      </article>
      <QuestionFilter />
    </>
  );
};

export default QuestionsListPage;
