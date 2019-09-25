import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import Question from "./components/Question";
import theme from "./constants/theme";

import data from "./data";

export default class App extends Component {
  title = 'You guys, let me know your soul :">';
  questionnaireData = data;

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Title>{this.title}</Title>
          <Questionnaire>
            {this.questionnaireData.map((question, key) => (
              <Question question={question} key={question.id} />
            ))}
          </Questionnaire>
          <Button>Send me</Button>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

const Title = styled.h1`
  color: #fff;
  font-size: 1.3rem;
  padding: 0.5em;
  margin: 0;
  background: #2980b9;
  position: relative;
  letter-spacing: 1px;
  font-style: italic;
  overflow: hidden;
  ::after {
    content: "";
    height: 3em;
    width: 3em;
    background: #fff;
    position: absolute;
    right: -51px;
    top: -7px;
    transform: rotate(45deg);
  }
`;

const StyledApp = styled.div`
  background: #fff;
  padding: 2em;
  margin: 0 10%;
  box-shadow: 0 0 20px #0000002e;
`;

const Questionnaire = styled.div`
  padding: 1em 0;
`;

const Button = styled.button`
  padding: 0.7em 2em;
  background: #2980b9;
  color: #fff;
  border: 2px solid #2980b9;
  border-radius: 30px;
  transition: 0.25s;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  :hover {
    background: #fff;
    color: #2980b9;
    border: 2px solid #2980b9;
    transition: 0.25s;
    outline: none;
  }
`;
