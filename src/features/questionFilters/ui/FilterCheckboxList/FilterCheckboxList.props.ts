import type { ISkill, ISpecialization } from "@/entities";
import type { IMockData } from "@/shared/interface";

export interface IFilterCheckboxList {
  list: ISpecialization[] | ISkill[] | IMockData[];
  currentValue: string | string[];
  onChange: (key: string, value: string) => void;
  filterKey: string;
  isArray?: boolean;
}
