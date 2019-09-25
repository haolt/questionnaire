import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "./Input";

const StyleCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default class Checkbox extends Component {
  render() {
    const { options } = this.props;
    return (
      <StyleCheckbox>
        {options.map((option, key) => {
          return <Input key={key} type="checkbox" option={option} />;
        })}
      </StyleCheckbox>
    );
  }
}

Checkbox.propTypes = {
  option: PropTypes.string
};