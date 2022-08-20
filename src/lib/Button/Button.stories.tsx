import React from "react";
import Button from "./Button";
import ButtonBase from "./ButtonBase";

export default {
  title: "Button",
};

export const Primary = () => (
  <Button variant="outlined" color="#ff0000">
    primary
  </Button>
);
export const Secondary = () => <Button color="green">secondary</Button>;

export const Pure = () => <ButtonBase>pure</ButtonBase>;
