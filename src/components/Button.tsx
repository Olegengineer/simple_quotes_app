import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  filterBar?: boolean;
  active?: boolean;
  create?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  transition: background-color 0.3s;

  ${(props) =>
    props.create &&
    css`
      background-color: #007bff;
      color: #ffffff;
      padding: 5px 10px;
      font-size: 8px;
      border-radius: 0px;
    `}

  ${(props) =>
    props.primary &&
    css`
      background-color: #007bff;
      color: #ffffff;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: #6c757d;
      color: #ffffff;
    `}

    ${(props) =>
    props.filterBar &&
    css`
      background-color: #f7f0f0;
      color: #7e8a9d;
      padding: 5px 10px;
      font-size: 8px;
      border-radius: 0px;
      &:hover {
        background-color: #f4d8d8 !important;
      }
    `}
  ${(props) =>
    props.active &&
    css`
      background-color: #f4d8d8;
    `}  
    
  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  filterBar,
  active,
  create,
  ...rest
}) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      filterBar={filterBar}
      create={create}
      active={active}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
