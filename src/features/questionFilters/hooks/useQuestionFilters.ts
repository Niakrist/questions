import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useSearchParams } from "react-router-dom";
import type { IQuestionFilter } from "../model/i-question-filter.interface";
import { useEffect } from "react";
import { changeFilter, initializeFilter } from "../model/questionFiltersSlice";

type QuestionFilterKeys = keyof IQuestionFilter;

export const useQuestionFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { specialization, skills, rate, complexity } = useAppSelector(
    (state) => state.questionFilters
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialFilter: Partial<IQuestionFilter> = {};
    for (const [key, value] of searchParams) {
      const filterKey = key as QuestionFilterKeys;
      initialFilter[filterKey] = value;
    }
    dispatch(initializeFilter(initialFilter));
  }, [dispatch]);

  useEffect(() => {
    if (specialization) {
      searchParams.set("specialization", specialization);
    } else {
      searchParams.delete("specialization");
    }

    if (skills) {
      searchParams.set("skills", skills);
    } else {
      searchParams.delete("skills");
    }

    setSearchParams(searchParams);
  }, [specialization, skills]);

  const handleChangeSpecialization = (value: string) => {
    if (specialization === value) {
      dispatch(changeFilter({ key: "specialization", value: "" }));
    } else {
      dispatch(changeFilter({ key: "specialization", value }));
    }
  };

  const handleChageSkills = (value: string) => {
    let params = skills.split(",") || [];
    if (params.includes(value)) {
      params = params.filter((param) => param !== value);
    } else {
      params.push(value);
    }
    dispatch(changeFilter({ key: "skills", value: params.join(",") }));
  };

  return {
    handleChangeSpecialization,
    handleChageSkills,
    specialization,
    skills,
    rate,
    complexity,
  };
};
