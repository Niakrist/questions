import React from "react";
import styles from "./QuestionsListPage.module.css";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { Htag } from "@/shared/ui";
import { QuestionItem } from "@/entities";

const QuestionsListPage = (): React.JSX.Element => {
  const { data } = useGetQuestionsQuery("");

  const questionList = data?.data;
  console.log("data: ", questionList);
  return (
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
  );
};

export default QuestionsListPage;
