import React from "react";
import { SButton, SButtonProps } from "./Button.styles";
import { ButtonBaseProps } from "./ButtonBase";

export interface ButtonProps extends ButtonBaseProps, SButtonProps {}

const Button = (props: ButtonProps) => {
  const { children, ...others } = props;
  return <SButton {...others}>{children}</SButton>;
};

export default Button;
