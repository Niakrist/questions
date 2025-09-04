import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Icon, Skeleton } from "@/shared/ui";
import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { QuestionAnswer, QuestionInfo } from "@/widgets";
import { Author } from "@/entities";
import styles from "./QuestionItemPage.module.css";

const QuestionItemPage = (): React.JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <div>ID не найден</div>;
  const { data, isLoading } = useGetQuestionByIdQuery(id);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <article className={styles.article}>
        <Button
          onClick={handleBack}
          bgColor="transparent"
          color="purple"
          textSize="normal"
          fontWeight="fw400">
          <Icon className={styles.iconChevron} name="iconChevron" />
          Назад
        </Button>
        <QuestionAnswer data={data} isLoading={isLoading} />
      </article>
      <aside className={styles.aside}>
        <QuestionInfo data={data} isLoading={isLoading} />
        {isLoading ? (
          <Skeleton count={1} type="specialization" />
        ) : (
          <Author authorName={data?.createdBy.username as string} />
        )}
      </aside>
    </>
  );
};

export default QuestionItemPage;
