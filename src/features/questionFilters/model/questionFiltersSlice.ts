import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IQuestionFilter } from "./i-question-filter.interface";

const initialState: IQuestionFilter = {
  specialization: "",
  skills: "",
  rate: "",
  complexity: "",
};

export const questionFiltersSlice = createSlice({
  name: "questionFilters",
  initialState,
  reducers: {
    initializeFilter: (
      state,
      { payload }: PayloadAction<Partial<IQuestionFilter>>
    ) => {
      return { ...state, ...payload };
    },
    changeFilter: (
      state,
      { payload }: PayloadAction<{ key: keyof IQuestionFilter; value: string }>
    ) => {
      return { ...state, [payload.key]: payload.value };
    },
  },
});

export const { initializeFilter, changeFilter } = questionFiltersSlice.actions;

export default questionFiltersSlice.reducer;
