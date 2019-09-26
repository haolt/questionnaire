import React from 'react';
import PropTypes from 'prop-types';
import Input from '../InputAnswer';
import StyleCheckbox from './styles';

const CheckboxAnswer = (props) => {
  const { options } = props;
  return (
    <StyleCheckbox>
      { options.map((option) => <Input key={option} type="checkbox" option={option} />)}
    </StyleCheckbox>
  );
};

export default CheckboxAnswer;

CheckboxAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
