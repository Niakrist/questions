import type { IQuestionFilter } from "@/shared/interface";

export interface ISearchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: "search";
  children?: React.ReactNode;
  placeholder: string;
  type: "text";
  handleChange: (keyValue: keyof IQuestionFilter, value: string) => void;
  keyValue: keyof IQuestionFilter;
}
