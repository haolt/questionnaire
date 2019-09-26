import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

export default class InputAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { type, option, name } = this.props;
    // const { value } = this.state;
    return (
      <>
        <StyledInput type={type} name={name} id={option} />
        <label htmlFor={option}>{option}</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </>
    );
  }
}

InputAnswer.propTypes = {
  type: PropTypes.string.isRequired,
  option: PropTypes.string,
  name: PropTypes.string,
};
