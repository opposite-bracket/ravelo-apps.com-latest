import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Menu from './containers/menu-section/MenuSection';
import * as Sentry from '@sentry/browser';
import './App.scss';
import Home from "./containers/home-page/HomePage";
import AboutPage from "./containers/about-page/AboutPage";
import SignInPage from "./containers/sign-in-page/SignInPage";
import SignUpPage from "./containers/sign-up-page/SignUpPage";
import AttendancePage from "./containers/attendance-page/AttendancePage";

class App extends Component {

  constructor(props) {
    super(props);

    const SENTRY_DNS = process.env.SENTRY_DNS;

    Sentry.init({
     dsn: SENTRY_DNS
    });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Menu />

          <div className='app'>
            <Route path='/' exact component={ Home } />
            <Route path='/attendance' exact component={ AttendancePage } />
            <Route path='/about' exact component={ AboutPage } />
            <Route path='/sign-in' exact component={ SignInPage } />
            <Route path='/sign-up' exact component={ SignUpPage } />
          </div>
        </div>
      </Router>
    );
  }
}

export default withTranslation()(App);