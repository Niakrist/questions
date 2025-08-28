import React from "react";
import cn from "classnames";
import styles from "./CheckBox.tsx.module.css";

interface ICheckBoxProps {
  title: string;
  id: number;
  value: boolean;
  handleChange: (value: string) => void;
  imageSrc?: string;
}

const CheckBox = ({
  title,
  id,
  value,
  imageSrc,
  handleChange,
}: ICheckBoxProps): React.JSX.Element => {
  console.log("imageSrc: ", imageSrc);

  return (
    <>
      <input
        type="checkbox"
        checked={value}
        onChange={() => handleChange(String(id))}
        className={styles.input}
        id={title + id}
      />
      <label
        className={cn(styles.checkbox, {
          [styles.activeCheck]: value,
        })}
        htmlFor={title + id}>
        <div className={styles.checkText}>
          {imageSrc ? (
            <>
              <img
                className={styles.img}
                src={imageSrc || "bug.jpg"}
                alt={title}
              />{" "}
              <span>{title}</span>
            </>
          ) : (
            <span>{title}</span>
          )}
        </div>
      </label>
    </>
  );
};

export default CheckBox;
