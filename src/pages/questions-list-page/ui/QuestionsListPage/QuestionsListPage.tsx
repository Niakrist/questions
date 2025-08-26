import React from "react";
import styles from "./QuestionsListPage.module.css";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { Htag } from "@/shared/ui";

const QuestionsListPage = (): React.JSX.Element => {
  const { data } = useGetQuestionsQuery("");

  return <article className={styles.article}>QuestionsListPage</article>;
};

export default QuestionsListPage;
