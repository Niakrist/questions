import React, { useState } from "react";
import styles from "./CategoryBlock.module.css";
import CheckBox from "../CheckBox/CheckBox";
import type { ISkill, ISpecialization } from "@/shared/interface";
import cn from "classnames";
import type { IMockData } from "@/shared/interface/mock-data.interface";

interface ICategoryBlockProps {
  name: string;
  list: ISkill[] | ISpecialization[] | IMockData[];
  handleChange: (keyValue: string, value: string) => void;
  value: string | string[];
  isArray?: boolean;
  children?: React.ReactNode;

  keyValue: string;
}

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const CategoryBlock = ({
  name,
  list,
  handleChange,
  value,
  isArray,
  children,
  keyValue,
}: ICategoryBlockProps): React.JSX.Element => {
  const [isShowAll, setIsShowAll] = useState(false);

  const handleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  return (
    <div className={styles.block}>
      <p className={styles.name}>{name}</p>
      <ul className={cn(styles.list, { [styles.showAll]: isShowAll })}>
        {list?.map((item) => {
          const hasImageSrc = "imageSrc" in item;
          return (
            <li className={styles.item} key={item.id}>
              <CheckBox
                imageSrc={hasImageSrc ? item?.imageSrc : undefined}
                title={item.title}
                id={item.id}
                keyValue={keyValue}
                value={
                  isArray
                    ? value.includes(String(item.id))
                    : value === String(item.id)
                }
                handleChange={handleChange}
              />
            </li>
          );
        })}
      </ul>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ButtonProps>(child)) {
          return React.cloneElement(child, {
            onClick: handleShowAll,
            children: isShowAll ? "Скрыть" : "Посмотреть все",
            ...child.props,
          });
        }
        return child;
      })}
    </div>
  );
};

export default CategoryBlock;
