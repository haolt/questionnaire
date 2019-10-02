import React from 'react';
import StyledTextarea from './styles';

const TextareaAnswer = (props) => {
  const { handleChange } = props;
  return <StyledTextarea rows="5" cols="50" onChange={handleChange} name="message" />;
};

export default TextareaAnswer;
