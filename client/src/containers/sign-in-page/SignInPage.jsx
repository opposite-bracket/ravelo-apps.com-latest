import React, { Component } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import {UserContext} from "../../context-providers/UserProvider";

class SignInPage extends Component {

  static contextType = UserContext;

  constructor (props) {
    super(props);

    this.t = this.props.t;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    this.context.signIn(email, password);
    this.props.history.push('/');
  }

  render () {
    return (<div>
      <h1>
        <Trans i18nKey='SignInPage_title'>Sign in page</Trans>
      </h1>

      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            <Trans i18nKey="SignUp_emailLabel">E-Mail</Trans>
            <span className='text-danger'> *</span>
          </label>
          <input type="text" className="form-control" id="email" placeholder={this.t('SignUp_emailLabel')} />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <Trans i18nKey="SignUp_passwordLabel">Password</Trans>
            <span className='text-danger'> *</span>
          </label>
          <input type="password" className="form-control" id="password" placeholder={this.t('SignUp_passwordLabel')} />
        </div>
        <button type="submit" className="btn btn-primary">
          <Trans i18nKey="SignIn_submitForm">Sign In</Trans>
        </button>
      </form>
    </div>);
  }
}

export default withTranslation()(withRouter(SignInPage));