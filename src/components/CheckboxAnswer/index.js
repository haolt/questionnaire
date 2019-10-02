import React from 'react';
import PropTypes from 'prop-types';
import InputAnswer from '../InputAnswer';
import StyleCheckbox from './styles';

const CheckboxAnswer = (props) => {
  const { options, hanldeChangeCheckBox, name } = props;
  return (
    <StyleCheckbox>
      { options.map((option) => <InputAnswer key={option} type="checkbox" option={option} name={name} id={option} hanldeChangeCheckBox={hanldeChangeCheckBox} />)}
    </StyleCheckbox>
  );
};
export default CheckboxAnswer;

CheckboxAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
