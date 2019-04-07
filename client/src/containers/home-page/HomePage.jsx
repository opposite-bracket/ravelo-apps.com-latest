import React, { Component } from 'react';
import { withTranslation, Trans } from 'react-i18next';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Trans i18nKey="HomePage_title">Welcome to Code Core's fundamentals</Trans>
        </h1>
        <Trans i18nKey="HomePage_disclaimer">
          <p>
            This application has been designed just to keep track of your attendance
            along with a few "material understanding checks" (MUC). These MUCs are
            designed to give us an idea of how well the material is sinking in. Don't
            worry too much about it, we just want to make sure that we will clarify
            the material prepared and given by code core.
          </p>
          <p>
            In order to keep you signed in to this app, we are storing a session
            id in your cookie that does not have any sensitive information about
            you. This id will be in your browser for a maximum of 2 days.
          </p>
          <p>
            Furthermore, we are only storing your email and a one way encryption
            of whatever password you choose to use with your account. We are willing
            to comply with GDPR regulations, so one of the following in case you
            want to either find out the data this applications is storing about
            you. You can alternatively ask for use to remove all the information
            this application stores. In any case, please contact use:
          </p>
          <ul>
            <li><a href='mailto:arturo@ravelo.ca'>Jesus Rodriguez</a></li>
            <li><a href='mailto:ramneek@codecore.ca'>Ramneek Singh Kumar</a></li>
            <li><a href='mailto:ian@codecore.ca'>Ian McKinnon</a></li>
          </ul>
        </Trans>
      </div>
    );
  }
}

export default withTranslation()(HomePage);