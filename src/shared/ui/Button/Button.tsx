import React from "react";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
