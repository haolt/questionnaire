import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

export default class InputAnswer extends Component {

  noAction = () => { javascript:void(0); }
  render() {
    const { type, option, handleChange, hanldeChangeCheckBox } = this.props;
    const name = type === 'radio'? this.props.name : (type === 'text' ? 'name' : (type === 'number' ? 'age' : (type === 'date' ? 'meeting' : '')));
    return (
      <>
        <StyledInput type={type} name={name} id={option} onChange={handleChange}
          onClick={ type === 'checkbox' ? hanldeChangeCheckBox : this.noAction }
          defaultValue={ type === 'text' ? '' : (((type === 'radio') || (type === 'checkbox')) && option) }
        />
        <label htmlFor={option}>{option}</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </>
    );
  }
}

InputAnswer.propTypes = {
  type: PropTypes.string.isRequired,
  option: PropTypes.string
};
InputAnswer.defaultValue = {
  option: []
};