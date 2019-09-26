import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Question from "../components/Question";
import theme from "../constants/theme";
import { Title, StyledApp, Questionnaire, Button } from './styles';
import data from "../data";

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  title = 'You guys, let me know your soul :">';
  questionnaireData = data;
  state = {
    name: '',
    gender: '',
    age: Number,
    status: '',
    job: '',
    relationship: '',
    relatedTags: [],
    meeting: new Date(),
    message: '',
    isRobot: true
  }
  submitQuestionnaire = (key, value) => {
    // switch (val) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
    console.log(this.state, value);
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    console.log(this.state.status);
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Title>{this.title}</Title>
          <Questionnaire>
            {this.questionnaireData.map((question, key) => (
              <Question question={question} key={question.id} handleChange={this.handleChange}/>
            ))}
          </Questionnaire>
          <Button onClick={ (val) => this.submitQuestionnaire(val) }>Send me</Button>
        </StyledApp>
      </ThemeProvider>
    );
  }
}




