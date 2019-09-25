import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid #00000024;
  border-radius: 2px;
  height: 3em;
  padding: 5px;
  font-size: 0.9em;
  color: ${props => props.theme.textColor};
  outline: none;
  :hover,
  :focus {
    outline: none;
  }
`;

export default class Selection extends Component {
  render() {
    const { options } = this.props;
    return (
      <StyledSelect>
        {options.map((option, key) => (
          <option value="options" key={key}>
            {option}
          </option>
        ))}
      </StyledSelect>
    );
  }
}

Selection.propTypes = {
  option: PropTypes.string,
  name: PropTypes.string
};
