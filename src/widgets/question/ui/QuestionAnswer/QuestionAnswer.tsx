import React from "react";
import { Htag, Skeleton, Text, WrapperBlock } from "@/shared/ui";
import type { IQuestionAnswerProps } from "./QuestionAnswer.props";
import styles from "./QuestionAnswer.module.css";

const QuestionAnswer = ({
  data,
  isLoading,
}: IQuestionAnswerProps): React.JSX.Element => {
  return (
    <>
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
                __html: data?.shortAnswer as string,
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
                __html: data?.longAnswer as string,
              }}
            />
          </>
        )}
      </WrapperBlock>
    </>
  );
};

export default QuestionAnswer;
