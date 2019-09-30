import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import InputAnswer from '../InputAnswer';
import RadioAnswer from '../RadioAnswer';
import CheckboxAnswer from '../CheckboxAnswer';
import TextareaAnswer from '../TextareaAnswer';
import SelectionAnswer from '../SelectionAnswer';
import RobotCapcha from '../RobotCapcha';
import { QuestionTitle, StyledQuestion } from './styles';

export default class Question extends Component {
  showAnswer = () => {
    const { question, verifyCapcha } = this.props;
    switch (question.type) {
      case 'text':
      case 'number':
      case 'date':
        return <InputAnswer type={question.type} {...this.props}/>;
      case 'radio':
        return <RadioAnswer options={question.options} name={question.name} {...this.props}/>;
      case 'checkbox':
        return <CheckboxAnswer options={question.options} name={question.name} {...this.props}/>;
      case 'select':
        // return <SelectionAnswer options={question.options} handleChange={() => handleChange()} />;
        return <SelectionAnswer options={question.options} {...this.props} />;
      case 'textarea':
        return <TextareaAnswer {...this.props}/>;
      case 'capcha':
        return <RobotCapcha verifyCapcha={verifyCapcha} />;
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

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
