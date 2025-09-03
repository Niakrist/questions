import type { IQuestionFilter } from "@/features/questionFilters/model/i-question-filter.interface";

interface ICheckBoxProps {
  title: string;
  id: number | string;
  checked: boolean;
  handleChange: (keyValue: keyof IQuestionFilter, value: string) => void;
  imageSrc?: string;
  keyValue: keyof IQuestionFilter;
}
