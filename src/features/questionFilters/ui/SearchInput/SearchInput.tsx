import React, { useEffect, useState } from "react";
import { useDebounce } from "@/shared/hooks";
import { Icon, Input } from "@/shared/ui";
import type { ISearchInput } from "./SearchInput.props";

const SearchInput = ({
  name,
  type,
  placeholder,
  handleChange,
  keyValue,
  value,
}: ISearchInput) => {
  const [inputValue, setInputValue] = useState(value || "");
  const debounceValue = useDebounce(inputValue, 1000);
  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

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
      value={inputValue}
      placeholder={placeholder}
      onChange={handleSearch}>
      <Icon name="iconSearch" />
    </Input>
  );
};

export default SearchInput;
