import React, { Component } from 'react';
import robotCapcha from './images/capcha.PNG';
import verifyRobotCapchaSuccess from './images/capcha-success.PNG';

export default class RobotCapcha extends Component {
  constructor(props) {
    super(props);
    this.state = { isRobot: true };
  }

    hanleVeryfyCapcha = () => {
      const { verifyCapcha } = this.props;
      verifyCapcha();
      this.setState({ isRobot: false });
    }

    render() {
      const { isRobot } = this.state;
      return (
        <img onClick={this.hanleVeryfyCapcha} src={isRobot ? robotCapcha : verifyRobotCapchaSuccess} alt="robotCapcha" height="100px" />
      );
    }
}
