import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Question from '../Question';
import {
  StyleQuestionnaire,
  Button,
} from './styles';
import data from '../../data';

export default class Questionnaire extends Component {
  questionnaireData = data;

  constructor(props) {
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
      activeSubmitBtn: false,
    };
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
    if (
      name && gender && age && status
      && relationshipRating && (relatedTags.length > 0)
      && message && !isRobot
    ) { this.setState({ activeSubmitBtn: true }); }
  }

  verifyCapcha = () => {
    this.setState({
      isRobot: false,
    },
    function _checkFullField() {
      this.checkFullField();
    });
  }

  onSubmitForm = () => {
    // console.log(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    },
    function _checkFullField() {
      this.checkFullField();
      // console.log(this.state);
    });
  }

  hanldeChangeCheckBox(event) {
    const curentTag = event.target.value;
    const { relatedTags } = this.state;
    if (relatedTags.includes(curentTag)) {
      this.setState({
        relatedTags: relatedTags.filter((tag) => tag !== curentTag),
      },
      function _checkFullField() {
        this.checkFullField();
      })
    } else {
      relatedTags.push(curentTag);
      this.setState({
        relatedTags,
      },
      function _checkFullField() {
        this.checkFullField();
      });
    }
  }

  render() {
    // console.log(this.props.history);
    // console.log(this.props.match);
    const { activeSubmitBtn } = this.state;
    return (
      <>
        <StyleQuestionnaire>
          {this.questionnaireData.map((question) => (
            <Question
              question={question}
              key={question.id}
              handleChange={this.handleChange}
              hanldeChangeCheckBox={this.hanldeChangeCheckBox}
              verifyCapcha={this.verifyCapcha}
            />
          ))}
        </StyleQuestionnaire>
        {
          activeSubmitBtn
            ? (
              <Link
                className="btn btn-submit"
                to={
                  {
                    pathname: '/result',
                    state: {
                      dataFromForm: this.state,
                    },
                  }
              }
              >
                Send me
                { activeSubmitBtn }
              </Link>
            )
            : (
              <Button
                onClick={this.onSubmitForm}
                disabled
              >
                Send me
              </Button>
            )
        }
      </>
    );
  }
}
