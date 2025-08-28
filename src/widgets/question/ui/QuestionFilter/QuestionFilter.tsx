import React from "react";
import styles from "./QuestionFilter.module.css";
import { Button, CategoryBlock, Icon, Input } from "@/shared/ui";
import { useGetSkillsQuery } from "@/entities/skill/api/skillApi";
import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import { useQuestionFilters } from "@/features";
import { LEVEL_COMPLEXITY, RATE_QUESTIONS } from "@/shared/constants";

const QuestionFilter = (): React.JSX.Element => {
  const { data: skillList } = useGetSkillsQuery("");
  const { data: specializationList } = useGetSpecializationQuery("");

  const {
    handleChangeSpecialization,
    handleChageSkills,
    skills,
    specialization,
    rate,
    complexity,
  } = useQuestionFilters();

  if (!skillList || !specializationList) {
    return <div>Загрущка</div>;
  }

  return (
    <aside className={styles.aside}>
      <Input type="text" name="search" placeholder="Введите запрос…">
        <Icon name="iconSearch" />
      </Input>

      <CategoryBlock
        name="Специализация"
        list={specializationList.data}
        value={specialization}
        handleChange={handleChangeSpecialization}>
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
        handleChange={handleChageSkills}
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
        handleChange={handleChageSkills}
      />
      <CategoryBlock
        name="Рейтинг"
        list={RATE_QUESTIONS}
        value={rate}
        handleChange={handleChageSkills}
      />
    </aside>
  );
};

export default QuestionFilter;
