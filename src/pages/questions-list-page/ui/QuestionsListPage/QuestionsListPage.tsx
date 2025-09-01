import React from "react";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { Htag, Pagination } from "@/shared/ui";
import { QuestionItem } from "@/entities";
import { QuestionFilter } from "@/widgets";
import { useLocation } from "react-router-dom";
import { useQuestionFilters } from "@/features";
import styles from "./QuestionsListPage.module.css";

const QuestionsListPage = (): React.JSX.Element => {
  const { search } = useLocation();
  const { data, isLoading } = useGetQuestionsQuery(search ? search : "");
  const questionList = data?.data;
  const totalQuestion = data?.total;
  const limit = data?.limit;
  const { handleChangeItemFilter } = useQuestionFilters();

  if (isLoading) return <div>Loading</div>;
  // !questionList || !totalQuestion || !limit
  return (
    <>
      <article className={styles.article}>
        <Htag className={styles.title} tag="h1" sizeText="big">
          Вопросы React, JavaScript
        </Htag>
        <ul>
          {questionList?.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </ul>

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
