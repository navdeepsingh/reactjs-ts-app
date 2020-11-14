import React, { MouseEventHandler } from "react";
import * as s from "../../../app.styles";

type Props = {
  children: React.ReactChildren | string | React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
};

const Button = ({ children, type, onClick }: Props) => {
  return (
    <s.button
      type={type}
      onClick={onClick}
    >
      {children}
    </s.button>
  );
};

export default Button;
