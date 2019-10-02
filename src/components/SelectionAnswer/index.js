import React from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';

const SelectionAnswer = (props) => {
  const { options, handleChange } = props;
  return (
    <StyledSelect name="status" onChange={handleChange}>
      {
        options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))
      }
    </StyledSelect>
  );
};

export default SelectionAnswer;

SelectionAnswer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
