import React from "react";
import styles from "./QuestionFilter.module.css";
import { Button, CategoryBlock, Icon, Input, Skeleton } from "@/shared/ui";
import { useGetSkillsQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import { useQuestionFilters, useResetFilter } from "@/features";
import { LEVEL_COMPLEXITY, RATE_QUESTIONS } from "@/shared/constants";
import { useLocation } from "react-router-dom";

const QuestionFilter = (): React.JSX.Element => {
  const { data: skillList, isLoading: isLoadingSkills } = useGetSkillsQuery("");
  const { data: specializationList, isLoading: isLoadingSpecialization } =
    useGetSpecializationQuery("");

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

  const resetFilter = useResetFilter("/questions");

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

      {isLoadingSpecialization ? (
        <Skeleton count={4} type="specialization" />
      ) : (
        <CategoryBlock
          name="Специализация"
          list={specializationList?.data || []}
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
      )}

      {isLoadingSkills ? (
        <Skeleton count={4} type="specialization" />
      ) : (
        <CategoryBlock
          name="Навыки"
          list={skillList?.data || []}
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
      )}

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

      {search && search !== "?page=1" && (
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
