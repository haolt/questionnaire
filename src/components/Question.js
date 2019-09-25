import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Selection from "./Selection";
import RobotCapcha from "./RobotCapcha";

import QuestionTitle from "./QuestionTitle";

export default class Question extends Component {
  showAnswer = () => {
    const { question } = this.props;
    switch (question.type) {
      case "text":
      case "number":
      case "date":
        return <Input type={question.type} />;
      case "radio":
        return <Radio options={question.options} name={question.name} />;
      case "checkbox":
        return <Checkbox options={question.options} />;
      case "select":
        return <Selection options={question.options} />;
      case "textarea":
        return <Textarea />;
      case "capcha":
        return <RobotCapcha />;
      default:
        break;
    }
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