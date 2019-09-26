import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputAnswer from '../InputAnswer';
import RadioAnswer from '../RadioAnswer';
import CheckboxAnswer from '../CheckboxAnswer';
import TextareaAnswer from '../TextareaAnswer';
import SelectionAnswer from '../SelectionAnswer';
import RobotCapcha from '../RobotCapcha';
import QuestionTitle from './styles';

export default class Question extends Component {
  showAnswer = () => {
    const { handleChange, question } = this.props;
    switch (question.type) {
      case 'text':
      case 'number':
      case 'date':
        return <InputAnswer type={question.type} />;
      case 'radio':
        return <RadioAnswer options={question.options} name={question.name} />;
      case 'checkbox':
        return <CheckboxAnswer options={question.options} />;
      case 'select':
        return <SelectionAnswer options={question.options} {...this.props} />;
      case 'textarea':
        return <TextareaAnswer />;
      case 'capcha':
        return <RobotCapcha />;
      default:
        break;
    }
    return false;
  };

  render() {
    const { question } = this.props;
    return (
      <StyledQuestion>
        <QuestionTitle>
          <FontAwesomeIcon icon={faKey} color="#636e72" />
          &nbsp;&nbsp;
          {question.title}
        </QuestionTitle>
        {this.showAnswer()}
      </StyledQuestion>
    );
  }
}

const StyledQuestion = styled.div`
  margin: 2.5em 0;
`;

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
