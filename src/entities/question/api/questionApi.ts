import { BASE_QUESTIONS_URL } from "@/shared/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestionResponse } from "../model/question-request.interface";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_QUESTIONS_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionResponse, string>({
      query: (params) => {
        return {
          url: `/public-questions/${params ? "?" + params : ""}`,
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionApi;
