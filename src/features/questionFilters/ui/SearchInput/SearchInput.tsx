import { useDebounce } from "@/shared/hooks";
import { Icon, Input } from "@/shared/ui";
import React, { useEffect, useState } from "react";
import type { IQuestionFilter } from "../../model/i-question-filter.interface";

interface ISearchInput {
  placeholder: string;
  type: "text";
  name: "search";
  value: string;
  keyValue: keyof IQuestionFilter;
  handleChange: (keyValue: keyof IQuestionFilter, value: string) => void;
}

const SearchInput = ({
  name,
  type,
  placeholder,
  handleChange,
  keyValue,
  value,
}: ISearchInput) => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 1000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    handleChange(keyValue, debounceValue);
  }, [debounceValue]);

  return (
    <Input
      type={type}
      name={name}
      id={name}
      defaultValue={value}
      placeholder={placeholder}
      onChange={handleSearch}>
      <Icon name="iconSearch" />
    </Input>
  );
};

export default SearchInput;
