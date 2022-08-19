import React from "react";
import { ButtonBaseProps } from "./ButtonBase";
import ButtonBase from './ButtonBase';

export interface ButtonProps extends ButtonBaseProps {
  variant?: "contained" | "outlined" | "text";
  color?: string;
}

const Button = (props: ButtonProps) => {
  const { variant, color, children, ...others } = props;
  return <ButtonBase color={color} {...others}>{children}</ButtonBase>;
};

export default Button;
