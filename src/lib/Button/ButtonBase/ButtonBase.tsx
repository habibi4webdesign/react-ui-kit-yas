import React, { ComponentPropsWithoutRef, forwardRef } from "react";

export interface ButtonBaseProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color"> {
  children: React.ReactNode;
  className?: string;
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const { children, className, ...others } = props;
    return (
      <button
        className={className}
        ref={ref}
        {...others}
      >
        {children}
      </button>
    );
  }
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
