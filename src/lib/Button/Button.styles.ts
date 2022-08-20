import styled from "styled-components";
import ButtonBase from "./ButtonBase";

export interface SButtonProps {
  color?: string;
  variant?: "contained" | "outlined" | "text";
}

export const SButton = styled(ButtonBase)<SButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: none;
  background: none;
  border-radius: 0;
  padding: 0.5rem 1rem;
  color: ${(props) => {
    return props.color;
  }};
  ${(props) => {
    if (props.variant === "outlined") {
      return `
        border: 1px solid red;
        background: #fff;
      `;
    } else if (props.variant === "contained") {
      return `
        border: 1px solid green;
      `;
    } else {
      return `
        border: 0;
      `;
    }
  }};
`;
