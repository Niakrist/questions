import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { changeFilter, initializeFilter } from "../model/questionFiltersSlice";
import type { IQuestionFilter } from "../model/i-question-filter.interface";

type QuestionFilterKeys = keyof IQuestionFilter;
const QUESTION_FILTER_KEYS: QuestionFilterKeys[] = [
  "specialization",
  "skills",
  "rate",
  "complexity",
  "title",
  "page",
];

export const useQuestionFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { specialization, skills, rate, complexity, title, page } =
    useAppSelector((state) => state.questionFilters);

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
    if (rate) {
      searchParams.set("rate", rate);
    } else {
      searchParams.delete("rate");
    }
    if (complexity) {
      searchParams.set("complexity", complexity);
    } else {
      searchParams.delete("complexity");
    }
    if (title) {
      searchParams.set("title", title);
    } else {
      searchParams.delete("title");
    }
    if (page) {
      searchParams.set("page", page);
    } else {
      searchParams.delete("page");
    }

    setSearchParams(searchParams);
  }, [specialization, skills, rate, complexity, title, page]);

  const handleChangeItemFilter = (key: string, value: string) => {
    if (!QUESTION_FILTER_KEYS.includes(key as QuestionFilterKeys)) {
      return;
    }
    const filterKey = key as QuestionFilterKeys;
    if (searchParams.get(key) === value) {
      dispatch(changeFilter({ key: filterKey, value: "" }));
    } else {
      dispatch(changeFilter({ key: filterKey, value }));
      if (filterKey !== "page") {
        dispatch(changeFilter({ key: "page", value: "1" }));
      }
    }
  };

  const handleChangeArrayFilter = (key: string, value: string) => {
    if (!QUESTION_FILTER_KEYS.includes(key as QuestionFilterKeys)) {
      return;
    }
    const filterKey = key as QuestionFilterKeys;

    const currentParams = searchParams.get(key);
    let params = currentParams?.split(",") || [];
    if (params.includes(value)) {
      params = params.filter((param) => param !== value);
    } else {
      params.push(value);
    }
    dispatch(changeFilter({ key: filterKey, value: params.join(",") }));
    dispatch(changeFilter({ key: "page", value: "1" }));
  };

  return {
    specialization,
    handleChangeItemFilter,
    handleChangeArrayFilter,
    skills,
    rate,
    complexity,
    title,
    page,
  };
};
