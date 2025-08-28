import { BASE_SPECIALIZATIONS_URL } from "@/shared/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ISpecializationResponse } from "../model/specialization.interface";

export const specializationApi = createApi({
  reducerPath: "specializationApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_SPECIALIZATIONS_URL }),
  endpoints: (build) => ({
    getSpecialization: build.query<ISpecializationResponse, string>({
      query: (params) => {
        return {
          url: params ? "/?" + params : "",
        };
      },
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
