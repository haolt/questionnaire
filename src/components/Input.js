import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #00000024;
  border-radius: 2px;
  height: 2em;
  padding: 5px;
  font-size: 0.9em;
  color: ${props => props.theme.textColor};
  outline: none;
  :hover,
  :focus {
    outline: none;
  }
`;

export default class Input extends Component {
  render() {
    const { type, option, name } = this.props;
    return (
      <React.Fragment>
        <StyledInput type={type} name={name} id={option} />
        <label htmlFor={option}>{option}</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  option: PropTypes.string,
  name: PropTypes.string
};
