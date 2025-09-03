import React from "react";
import cn from "classnames";
import styles from "./CheckBox.module.css";

interface ICheckBoxProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  title: string;
  id: string;
  currentValue: string | string[];
  onCheck: (item: string) => void;
  isArray?: boolean;
}

const CheckBox = ({
  title,
  id,
  currentValue,
  onCheck,
  isArray,
}: ICheckBoxProps): React.JSX.Element => {
  const isChecked = isArray
    ? Array.isArray(currentValue) && currentValue.includes(id)
    : currentValue === id;

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheck(id)}
        className={styles.input}
        id={title + id}
      />
      <label
        className={cn(styles.checkbox, {
          [styles.activeCheck]: isChecked
            ? currentValue.includes(id)
            : currentValue === id,
        })}
        htmlFor={title + id}>
        <div className={styles.checkText}>{title}</div>
      </label>
    </li>
  );
};

export default CheckBox;
