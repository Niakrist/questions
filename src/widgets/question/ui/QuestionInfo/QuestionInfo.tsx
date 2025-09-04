import React from "react";
import { Link } from "react-router-dom";
import { CategoryBlock, Label, Skeleton, WrapperBlock } from "@/shared/ui";
import type { IQuestionInfoProps } from "./QuestionInfo.props";
import styles from "./QuestionInfo.module.css";

const QuestionInfo = ({
  data,
  isLoading,
}: IQuestionInfoProps): React.JSX.Element => {
  return (
    <WrapperBlock className={styles.wrapper}>
      <CategoryBlock name="Уровень:">
        {isLoading ? (
          <Skeleton count={2} type="skills" />
        ) : (
          <>
            <Label name="Сложность:" value={data?.complexity as number} />
            <Label name="Рейтинг:" value={data?.rate as number} />
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
  );
};

export default QuestionInfo;
