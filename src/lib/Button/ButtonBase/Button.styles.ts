import styled from "styled-components";
import ButtonBase from "./ButtonBase";

export const SButton = styled.button`
  color: ${(props) => {
    console.log(props);
    return props.color;
  }};
`;
