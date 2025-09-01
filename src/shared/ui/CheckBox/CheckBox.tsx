import React from "react";
import cn from "classnames";
import styles from "./CheckBox.tsx.module.css";
import type { ICheckBoxProps } from "./CheckBox.props";

const CheckBox = ({
  title,
  id,
  value,
  imageSrc,
  handleChange,
  keyValue,
}: ICheckBoxProps): React.JSX.Element => {
  return (
    <>
      <input
        type="checkbox"
        checked={value}
        onChange={() => handleChange(keyValue, String(id))}
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
              {/* <img
                className={styles.img}
                src={imageSrc || "bug.jpg"}
                alt={title}
              /> */}
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
