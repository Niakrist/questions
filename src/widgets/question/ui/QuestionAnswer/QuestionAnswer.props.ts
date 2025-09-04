import type { IQuestionItemResponse } from "@/entities/question/model/question-item-response.interface";

export interface IQuestionAnswerProps {
  data: IQuestionItemResponse | undefined;
  isLoading: boolean;
}
