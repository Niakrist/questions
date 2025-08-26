import type { IQuestion } from "@/shared/interface";

export interface IQuestionResponse {
  page: number;
  limit: number;
  data: IQuestion[];
  total: number;
}
