import type { IQuestionFilter } from "@/shared/interface";

export interface ICheckBoxProps {
  title: string;
  id: number | string;
  value: boolean;
  handleChange: (keyValue: keyof IQuestionFilter, value: string) => void;
  imageSrc?: string;
  keyValue: keyof IQuestionFilter;
}
