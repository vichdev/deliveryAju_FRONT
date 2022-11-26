import { IconType } from "react-icons";
import { JsxElement } from "typescript";

export interface IPropsInput {
  label?: string;
  type?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  color?: string;
  children?: React.ReactNode[];
}
