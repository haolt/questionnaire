import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Question from "../components/Question";
import theme from "../constants/theme";
import { Title, StyledApp, Questionnaire, Button } from './styles';
import data from "../data";

export default class App extends Component {
  title = 'You guys, let me know your soul :">';
  questionnaireData = data;

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.hanldeChangeCheckBox = this.hanldeChangeCheckBox.bind(this);
    this.verifyCapcha = this.verifyCapcha.bind(this);
    this.state = {
      name: '',
      gender: '',
      status: 'Single',
      relationshipRating: '',
      relatedTags: [],
      meeting: new Date(),
      message: '',
      isRobot: true,
      activeSubmitBtn: true,
    }
  }

  checkFullField = () => {
    const {
      name,
      gender,
      age,
      status,
      relationshipRating,
      relatedTags,
      message,
      isRobot,
    } = this.state;
    if (name && gender && age && status && relationshipRating && (relatedTags.length > 0) && message && !isRobot) {
      this.setState({ activeSubmitBtn: false });
    }
    
  }

  submitQuestionnaire = (key, value) => {
    console.log(this.state, value);
  }

  hanldeChangeCheckBox(event) {
    const curentTag = event.target.value;
    if (this.state.relatedTags.includes(curentTag)) {
      this.setState({
        relatedTags: this.state.relatedTags.filter((tag) => tag !== curentTag)
      },
      function() {
        this.checkFullField();
      })
    } else {
      this.state.relatedTags.push(curentTag);
      this.setState({
        relatedTags: this.state.relatedTags
      },
      function() {
        this.checkFullField();
      })
    }
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    },
    function() {
      this.checkFullField();
    })
  }

  verifyCapcha = () => {
    this.setState({
      isRobot: false
    },
    function() {
      this.checkFullField();
    });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Title>{this.title}</Title>
          <Questionnaire>
            {this.questionnaireData.map((question, key) => (
              <Question question={question} key={question.id}
                handleChange={this.handleChange}
                hanldeChangeCheckBox={this.hanldeChangeCheckBox}
                verifyCapcha={this.verifyCapcha}
              />
            ))}
          </Questionnaire>
          <Button disabled={this.state.activeSubmitBtn} onClick={ (val) => this.submitQuestionnaire(val) }>Send me</Button>
        </StyledApp>
      </ThemeProvider>
    );
  }
}




