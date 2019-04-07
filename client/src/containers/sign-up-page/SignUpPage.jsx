import React, { Component } from 'react';
import { Trans, withTranslation } from 'react-i18next';
import {UserContext} from "../../context-providers/UserProvider";
import { withRouter } from 'react-router-dom';

class SignUpPage extends Component {

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
    const confirmPassword = e.target.elements.confirmPassword.value;

    this.context.signUp(email, password);
    this.props.history.push('/attendance');
  }

  render() {
    return (
      <div>
        <h1>
          <Trans i18nKey='SignUp_signUpPage'>Sign up page</Trans>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">
              <Trans i18nKey="SignUp_confirmPasswordLabel">Confirm Password</Trans>
              <span className='text-danger'> *</span>
            </label>
            <input type="password" className="form-control" id="confirmPassword" placeholder={this.t('SignUp_confirmPasswordLabel')} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">
              <Trans i18nKey="SignUp_firstName">First Name</Trans>
              <span className='text-danger'> *</span>
            </label>
            <input type="text" className="form-control" id="firstName" placeholder={this.t('SignUp_firstName')} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              <Trans i18nKey="SignUp_lastName">Last Name</Trans>
              <span className='text-danger'> *</span>
            </label>
            <input type="text" className="form-control" id="lastName" placeholder={this.t('SignUp_lastName')} />
          </div>
          <button type="submit" className="btn btn-primary">
            <Trans i18nKey="SignUp_submitButton">Sign Up</Trans>
          </button>
        </form>
      </div>
    );
  }
}

export default withTranslation()(withRouter(SignUpPage));