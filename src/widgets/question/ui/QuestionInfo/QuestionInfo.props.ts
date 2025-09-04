import type { IQuestionItemResponse } from "@/entities/question/model/question-item-response.interface";

export interface IQuestionInfoProps {
  data: IQuestionItemResponse | undefined;
  isLoading: boolean;
}
