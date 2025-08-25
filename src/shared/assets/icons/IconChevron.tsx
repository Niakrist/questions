import React from "react";
import type { IIconProps } from "./IIconProps";

const IconChevron = ({
  className,
  ...props
}: IIconProps): React.JSX.Element => {
  return (
    <svg
      className={className}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconChevron;
