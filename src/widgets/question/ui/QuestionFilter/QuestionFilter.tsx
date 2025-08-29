import React from "react";
import styles from "./QuestionFilter.module.css";
import { Button, CategoryBlock, Icon, Input } from "@/shared/ui";
import { useGetSkillsQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import { useQuestionFilters } from "@/features";
import { LEVEL_COMPLEXITY, RATE_QUESTIONS } from "@/shared/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app/store/hooks";
import { onReset } from "@/features/questionFilters/model/questionFiltersSlice";

const QuestionFilter = (): React.JSX.Element => {
  const { data: skillList } = useGetSkillsQuery("");
  const { data: specializationList } = useGetSpecializationQuery("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleChangeItemFilter,
    handleChangeArrayFilter,
    skills,
    specialization,
    rate,
    complexity,
    title,
  } = useQuestionFilters();

  const { search } = useLocation();

  const resetFilter = () => {
    dispatch(onReset());
    navigate("/questions");
  };

  if (!skillList || !specializationList) {
    return <div>Загрущка</div>;
  }

  return (
    <aside className={styles.aside}>
      <Input
        value={title}
        handleChange={handleChangeItemFilter}
        keyValue="title"
        type="text"
        name="search"
        placeholder="Введите запрос…">
        <Icon name="iconSearch" />
      </Input>

      <CategoryBlock
        name="Специализация"
        list={specializationList.data}
        value={specialization}
        handleChange={handleChangeItemFilter}
        keyValue="specialization">
        <Button
          bgColor="transparent"
          color="purple"
          textSize="small"
          fontWeght="fw400"
          underline
        />
      </CategoryBlock>
      <CategoryBlock
        name="Навыки"
        list={skillList.data}
        value={skills.split(",")}
        handleChange={handleChangeArrayFilter}
        keyValue="skills"
        isArray>
        <Button
          bgColor="transparent"
          color="purple"
          textSize="small"
          fontWeght="fw400"
          underline
        />
      </CategoryBlock>

      <CategoryBlock
        name="Уровень сложности"
        list={LEVEL_COMPLEXITY}
        value={complexity}
        keyValue="complexity"
        handleChange={handleChangeArrayFilter}
        isArray
      />
      <CategoryBlock
        name="Рейтинг"
        keyValue="rate"
        list={RATE_QUESTIONS}
        value={rate}
        handleChange={handleChangeItemFilter}
      />

      {search && (
        <Button
          className={styles.button}
          bgColor="transparent"
          color="purple"
          textSize="normal"
          fontWeght="fw500"
          borderRadius="br12"
          onClick={resetFilter}>
          Сбросить
        </Button>
      )}
    </aside>
  );
};

export default QuestionFilter;
