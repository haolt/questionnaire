import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';

import Questionnaire from '../components/Questionnaire';
import Result from '../components/Result';
import theme from '../constants/theme';
import { StyledApp, Title } from './styles';

export default class App extends Component {
  title = 'You guys, let me know your soul :">';

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Title>{this.title}</Title>
          <Route exact path="/" component={Questionnaire} />
          <Route path="/result" component={Result} />
          {/* <Route exact path="/:id" component={(props) => <Questionnaire {...props} />} /> */}
        </StyledApp>
      </ThemeProvider>
    );
  }
}
