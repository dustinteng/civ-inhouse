//drop down menu file

import React from "react";

import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles.jsx";

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel>{props.formLabel}</StyledLabel>
      <StyledSelect id={props.questionId} name={props.value}>
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}
