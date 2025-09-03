import React from "react";
import styles from "./QuestionItemPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CategoryBlock,
  Htag,
  Icon,
  Label,
  Skeleton,
  Text,
  WrapperBlock,
} from "@/shared/ui";
import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";

const QuestionItemPage = (): React.JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <div>ID не найден</div>;
  }
  const { data, isLoading } = useGetQuestionByIdQuery(id);
  console.log("data: ", data);

  const handleBack = () => {
    navigate(-1);

    if (!data) {
      return <>load</>;
    }
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
          <Icon className={styles.iconChevron} name="iconChevron" /> Назад
        </Button>

        <WrapperBlock>
          {isLoading ? (
            <Skeleton count={2} type="question" />
          ) : (
            <>
              <Htag className={styles.mbSmall} tag="h1" sizeText="big">
                {data?.title}
              </Htag>
              <Text
                className={styles.text}
                color="black"
                fontWeight="fw500"
                textSize="normal">
                {data?.description}
              </Text>
            </>
          )}
        </WrapperBlock>
        <WrapperBlock>
          {isLoading ? (
            <Skeleton count={2} type="specialization" />
          ) : (
            <>
              <Htag className={styles.mbMedium} tag="h2" sizeText="medium">
                Краткий ответ
              </Htag>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: data.shortAnswer,
                }}
              />
            </>
          )}
        </WrapperBlock>
        <WrapperBlock>
          {isLoading ? (
            <Skeleton count={2} type="specialization" />
          ) : (
            <>
              <Htag className={styles.mbMedium} tag="h2" sizeText="medium">
                Развёрнутый ответ
              </Htag>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: data?.longAnswer,
                }}
              />
            </>
          )}
        </WrapperBlock>
      </article>
      <aside className={styles.aside}>
        <WrapperBlock className={styles.wrapper}>
          <CategoryBlock name="Уровень:">
            {isLoading ? (
              <Skeleton count={2} type="skills" />
            ) : (
              <>
                <Label name="Сложность:" value={data.complexity} />
                <Label name="Рейтинг:" value={data.rate} />
              </>
            )}
          </CategoryBlock>

          <CategoryBlock name="Навыки:">
            {isLoading ? (
              <Skeleton count={3} type="skills" />
            ) : (
              <ul className={styles.skillList}>
                {data?.questionSkills.map((item) => (
                  <li key={item.id}>
                    <Link className={styles.linkSkill} to="#">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </CategoryBlock>
          <CategoryBlock name="Ключевые слова:">
            {isLoading ? (
              <Skeleton count={3} type="skills" />
            ) : (
              <ul className={styles.list}>
                {data?.keywords.map((item) => (
                  <li key={item}>
                    <Link className={styles.link} to="#">
                      #{item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </CategoryBlock>
        </WrapperBlock>

        <p className={styles.author}>
          {isLoading ? (
            <Skeleton count={1} type="specialization" />
          ) : (
            <>
              Автор:{" "}
              <Link to="#" className={styles.accent}>
                {data?.createdBy.username}
              </Link>
            </>
          )}
        </p>
      </aside>
    </>
  );
};

export default QuestionItemPage;
