import React, { Component } from "react";
import robotCapcha from "../assets/images/capcha.PNG";

// This component is FOR FUN,
// NOT IS REAL CAPCHA VALIDATE ^^
class RobotCapcha extends Component {
  render() {
    return <img src={robotCapcha} alt="robotCapcha" />;
  }
}

export default RobotCapcha;
