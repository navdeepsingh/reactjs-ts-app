import React, {KeyboardEventHandler} from "react";
import * as s from "../../../app.styles";

type InputProps = {
  id?: string;
  name?: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  value?: string;  
  onChange?: Function;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean
  ref?: null | HTMLInputElement;
};

const Input = ({
  name,
  id,
  type,
  value,
  placeholder,
  onChange,
  disabled,
  readonly,
  required
}: InputProps) => {
  return (
    <s.input
      name={name}
      id={id}
      type={type}      
      placeholder={placeholder}
      value={value}      
      disabled={disabled}
      readOnly={readonly}      
      required={required}      
    />
  );
};

export default Input;
