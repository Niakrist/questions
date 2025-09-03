import React, { useState } from "react";
import styles from "./QuestionItem.module.css";
import { Icon, Label } from "@/shared/ui";
import { Link } from "react-router-dom";
import cn from "classnames";
import type { IQuestionItemProps } from "./QuestionItem.props";

const QuestionItem = ({ question }: IQuestionItemProps): React.JSX.Element => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleShowDetail = () => {
    setIsShowDetail((prev) => !prev);
  };

  return (
    <li className={styles.item}>
      <div onClick={handleShowDetail} className={styles.questionTitle}>
        {question.title}{" "}
        <Icon
          className={cn(styles.iconChevron, {
            [styles.show]: isShowDetail,
          })}
          name="iconChevron"
        />
      </div>
      {isShowDetail && (
        <div className={styles.questionDetails}>
          <div className={styles.wrapperRating}>
            <Label value={question.rate} name="Рейтинг:" />
            <Label value={question.complexity} name="Cложность:" />
          </div>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: question.shortAnswer,
            }}
          />
          <Link className={styles.link} to={`./${question.id}`}>
            Подробнее <Icon name="iconArrow" />
          </Link>
        </div>
      )}
    </li>
  );
};

export default QuestionItem;
