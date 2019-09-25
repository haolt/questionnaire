import React, { Component } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  resize: none;
  line-height: 25px;
  color: ${props => props.theme.textColor};
`;

export default class Textarea extends Component {
  render() {
    return <StyledTextarea rows="5" cols="50" />;
  }
}
