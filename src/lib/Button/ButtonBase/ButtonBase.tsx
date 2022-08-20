// import clsx from "clsx";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { ButtonBaseClasses } from "./ButtonBaseClasses";

export interface ButtonBaseProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color"> {
  children: React.ReactNode;
  className?: string;
  classes?: Partial<ButtonBaseClasses>;
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const { children, classes, className, ...others } = props;
    return (
      <button
        ref={ref}
        className={className}
        // className={clsx(classes?.root, className)}
        {...others}
      >
        {children}
      </button>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
