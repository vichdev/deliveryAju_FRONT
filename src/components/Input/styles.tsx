import { IconType } from "react-icons";
import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#FFF")};
`;

export const IconWrapper = styled.div<{
  children: React.ReactNode[] | React.ReactNode;
}>`
  position: absolute;
  top: 2.1rem;
  right: 1rem;
  svg {
    font-size: 1rem;
  }
`;

export const InputContent = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.25rem 0 0 0;
  cursor: default;
`;
