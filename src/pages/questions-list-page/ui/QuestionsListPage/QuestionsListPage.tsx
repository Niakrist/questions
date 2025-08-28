import React from "react";
import styles from "./QuestionsListPage.module.css";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { Htag } from "@/shared/ui";
import { QuestionItem } from "@/entities";
import { QuestionFilter } from "@/widgets";
import { useLocation } from "react-router-dom";

const QuestionsListPage = (): React.JSX.Element => {
  const { search } = useLocation();

  console.log("locatin: ");

  const { data } = useGetQuestionsQuery(search ? search : "");
  const questionList = data?.data;

  return (
    <>
      <article className={styles.article}>
        <Htag className={styles.title} tag="h1" sizeText="big">
          Вопросы React, JavaScript{" "}
        </Htag>
        <ul>
          {questionList?.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </ul>
      </article>
      <QuestionFilter />
    </>
  );
};

export default QuestionsListPage;
