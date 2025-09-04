import type { IQuestionFilter } from "../../model/i-question-filter.interface";

export interface ISearchInput {
  placeholder: string;
  type: "text";
  name: "search";
  value: string;
  keyValue: keyof IQuestionFilter;
  handleChange: (keyValue: keyof IQuestionFilter, value: string) => void;
}
