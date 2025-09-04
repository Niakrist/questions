import React from "react";
import { useLocation } from "react-router-dom";
import { Htag, Skeleton } from "@/shared/ui";
import { QuestionItem } from "@/entities";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { QuestionPagination } from "@/features";
import { QuestionFilter, QuestionNotFound } from "@/widgets";
import styles from "./QuestionsListPage.module.css";

const QuestionsListPage = (): React.JSX.Element => {
  const { search } = useLocation();
  const { data, isLoading } = useGetQuestionsQuery(search ? search : "");
  const questionList = data?.data;
  const totalQuestion = data?.total;
  const limit = data?.limit;

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
          <QuestionNotFound />
        )}
        <QuestionPagination
          limit={limit || 10}
          totalItems={totalQuestion || 1}
        />
      </article>
      <QuestionFilter />
    </>
  );
};

export default QuestionsListPage;
