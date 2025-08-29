import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IQuestionFilter } from "./i-question-filter.interface";

const initialState: IQuestionFilter = {
  specialization: "",
  skills: "",
  rate: "",
  complexity: "",
  title: "",
  page: "1",
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
      console.log("payload: ", payload);
      return { ...state, [payload.key]: payload.value };
    },
    onReset: () => {
      return initialState;
    },
  },
});

export const { initializeFilter, changeFilter, onReset } =
  questionFiltersSlice.actions;

export default questionFiltersSlice.reducer;
