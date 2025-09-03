import React from "react";
import type { ISkill, ISpecialization } from "@/entities";
import { CheckBox } from "@/shared/ui";
import type { IMockData } from "@/shared/interface/mock-data.interface";

interface IFilterCheckboxList {
  list: ISpecialization[] | ISkill[] | IMockData[];
  currentValue: string;
  onChange: (key: string, value: string) => void;
  filterKey: string;
  isArray?: boolean;
}

const FilterCheckboxList = ({
  list,
  currentValue,
  onChange,
  filterKey,
  isArray,
}: IFilterCheckboxList): React.JSX.Element => {
  const handleCheck = (item: string) => {
    onChange(filterKey, item);
  };

  const transformList = list.map((item) => ({
    id: String(item.id),
    title: item.title,
  }));

  return (
    <>
      {transformList.map((item) => (
        <CheckBox
          key={item.id}
          title={item.title}
          id={item.id}
          currentValue={currentValue}
          onCheck={handleCheck}
          isArray
        />
      ))}
    </>
  );
};

export default FilterCheckboxList;
