import React from "react";
import { IPropsInput } from "./interfaces/IPropsInput";
import { InputContent, InputWrapper, IconWrapper, Label } from "./styles";

const Input: React.FC<IPropsInput> = ({ ...props }) => {
  return (
    <InputWrapper>
      {props.label ? <Label color={props.color}>{props.label}</Label> : ""}
      <InputContent type={props.type} placeholder={props.placeholder} />
      {props.icon ? <IconWrapper> {props.icon}</IconWrapper> : ""}
    </InputWrapper>
  );
};

export default Input;
