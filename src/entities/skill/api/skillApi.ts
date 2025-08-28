import { BASE_SKILL_URL } from "@/shared/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ISkillRequest } from "../model/skill-request.interface";

export const skillApi = createApi({
  reducerPath: "skillApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_SKILL_URL }),
  endpoints: (build) => ({
    getSkills: build.query<ISkillRequest, string>({
      query: (params) => {
        return {
          url: params ? "/?" + params : "",
        };
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
