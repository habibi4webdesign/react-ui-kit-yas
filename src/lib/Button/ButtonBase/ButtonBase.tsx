// import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { SButton } from "./Button.styles";
import { ButtonBaseClasses } from "./ButtonBaseClasses";

export interface ButtonBaseProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
  classes?: Partial<ButtonBaseClasses>;
  color?: string;
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const { children, classes, className, ...others } = props;
    return (
      <SButton
        ref={ref}
        // className={clsx(classes?.root, className)}
        {...others}
      >
        {children}
      </SButton>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
