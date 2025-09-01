import { useNavigate } from "react-router-dom";
import { onReset } from "../model/questionFiltersSlice";
import { useAppDispatch } from "@/app/store/hooks";

export const useResetFilter = (url?: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetFilter = () => {
    dispatch(onReset());
    url && navigate(url);
  };

  return resetFilter;
};
