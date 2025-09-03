import { BASE_QUESTIONS_URL } from "@/shared/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestionsResponse } from "../model/questions-request.interface";
import type { IQuestionItemResponse } from "../model/question-item-response.interface";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_QUESTIONS_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionsResponse, string>({
      query: (params) => {
        return {
          url: `/public-questions/${params ? params : ""}`,
        };
      },
    }),
    getQuestionById: builder.query<IQuestionItemResponse, string>({
      query: (id) => {
        return {
          url: `/public-questions/${id}`,
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
