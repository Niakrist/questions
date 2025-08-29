import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";
import type { ISearchProps } from "./Input.props";
import { useDebounce } from "@/shared/hooks/useDebounce";

const Input = ({
  name,
  placeholder,
  children,
  type,
  keyValue,
  handleChange,
}: ISearchProps): React.JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 1000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    handleChange(keyValue, debounceValue);
  }, [debounceValue]);

  return (
    <label className={styles.label} htmlFor={name}>
      {children}
      <input
        onChange={handleSearch}
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
