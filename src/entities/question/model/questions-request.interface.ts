import type { IQuestion } from "@/shared/interface";

export interface IQuestionsResponse {
  page: number;
  limit: number;
  data: IQuestion[];
  total: number;
}
