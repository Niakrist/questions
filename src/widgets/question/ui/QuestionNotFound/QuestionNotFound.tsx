import React from "react";
import { useResetFilter } from "@/features";
import { Button, Text } from "@/shared/ui";
import styles from "./QuestionNotFound.module.css";

const QuestionNotFound = (): React.JSX.Element => {
  const resetFilter = useResetFilter();
  return (
    <>
      <Text
        className={styles.text}
        color="black"
        fontWeight="fw500"
        textSize="big">
        К сожалению, по запросу ничего не найдено. Попробуйте изменить запрос
        или воспользуйтесь нашими категориями
      </Text>
      <Button
        onClick={resetFilter}
        className={styles.button}
        bgColor="transparent"
        color="purple"
        borderRadius="br12"
        fontWeight="fw400"
        textSize="normal">
        Сбросить фильтр
      </Button>
    </>
  );
};

export default QuestionNotFound;
