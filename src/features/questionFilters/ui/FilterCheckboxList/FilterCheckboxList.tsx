import React from "react";
import { CheckBox } from "@/shared/ui";
import type { IFilterCheckboxList } from "./FilterCheckboxList.props";

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
          isArray={isArray}
        />
      ))}
    </>
  );
};

export default FilterCheckboxList;
