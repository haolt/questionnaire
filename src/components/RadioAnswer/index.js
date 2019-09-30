import React from 'react';
import PropTypes from 'prop-types';
import InputAnswer from '../InputAnswer';
import StyledRadio from './styles';

const RadioAnswer = (props) => {
  const { options, name, handleChange } = props;
  return (
    <StyledRadio onChange={handleChange}>
      { options.map((option) => <InputAnswer key={option} type="radio" name={name} id={option} option={option} />)}
    </StyledRadio>
  );
};

export default RadioAnswer;

RadioAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};
