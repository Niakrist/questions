import { questionApi } from "@/entities/question/api/questionApi";
import { skillApi } from "@/entities/skill/api/skillApi";
import { specializationApi } from "@/entities/specialization/api/specializationApi";
import questionFiltersSlice from "@/features/questionFilters/model/questionFiltersSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    questionFilters: questionFiltersSlice,
    [questionApi.reducerPath]: questionApi.reducer,
    [skillApi.reducerPath]: skillApi.reducer,
    [specializationApi.reducerPath]: specializationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionApi.middleware,
      skillApi.middleware,
      specializationApi.middleware
    ),
});
