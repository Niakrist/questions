import React from "react";
import styles from "./QuestionFilter.module.css";
import { Button, CategoryBlock, Skeleton } from "@/shared/ui";
import { useGetSkillsQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import {
  FilterCheckboxList,
  SearchInput,
  useQuestionFilters,
  useResetFilter,
} from "@/features";
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
      <SearchInput
        name="search"
        type="text"
        keyValue="title"
        value={title}
        handleChange={handleChangeItemFilter}
        placeholder="Введите запрос…"></SearchInput>

      <CategoryBlock name="Специализация" hasButton>
        {isLoadingSpecialization ? (
          <Skeleton count={4} type="specialization" />
        ) : (
          <FilterCheckboxList
            currentValue={specialization}
            list={specializationList?.data || []}
            onChange={handleChangeItemFilter}
            filterKey="specialization"
          />
        )}
      </CategoryBlock>
      <CategoryBlock name="Навыки" hasButton>
        {isLoadingSkills ? (
          <Skeleton count={8} type="skills" />
        ) : (
          <FilterCheckboxList
            currentValue={skills.split(",")}
            list={skillList?.data || []}
            onChange={handleChangeArrayFilter}
            filterKey="skills"
            isArray
          />
        )}
      </CategoryBlock>

      <CategoryBlock name="Уровень сложности">
        <FilterCheckboxList
          currentValue={complexity}
          list={LEVEL_COMPLEXITY}
          onChange={handleChangeArrayFilter}
          filterKey="complexity"
          isArray
        />
      </CategoryBlock>

      <CategoryBlock name="Рейтинг">
        <FilterCheckboxList
          currentValue={rate}
          list={RATE_QUESTIONS}
          onChange={handleChangeItemFilter}
          filterKey="rate"
        />
      </CategoryBlock>

      {search && search !== "?page=1" && (
        <Button
          className={styles.button}
          bgColor="transparent"
          color="purple"
          textSize="normal"
          fontWeight="fw500"
          borderRadius="br12"
          onClick={resetFilter}>
          Сбросить
        </Button>
      )}
    </aside>
  );
};

export default QuestionFilter;
