import React, {Component, Fragment} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';
import { UserContext } from "../../context-providers/UserProvider";

class MenuSection extends Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.i18n = props.i18n;
  }

  signOut () {
    this.context.signOut();
    this.props.history.push('/sign-in');
  }

  renderAuthenticatedMenuItems() {
    return (<Fragment>
      <li onClick={this.signOut} className="nav-item">
        <Link to='/about' className="nav-link">
          <Trans i18nKey='Menu_signOut'>Sign Out</Trans>
        </Link>
      </li>
    </Fragment>);
  }

  changeLanguage(lng) {
    this.i18n.changeLanguage(lng)
  }

  renderUnauthemticatedMenuItems() {
    return (<Fragment>
      <li className="nav-item">
        <Link to='/sign-in' className="nav-link">
          <Trans i18nKey='Menu_signIn'>Sign In</Trans>
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/sign-up' className="nav-link">
          <Trans i18nKey='Menu_signUp'>Sign Up</Trans>
        </Link>
      </li>
    </Fragment>);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand">
          <Trans i18nKey='Menu_home'>Home</Trans>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <span className="navbar-text ml-auto">
            <ul className="navbar-nav mr-auto">
              {/*<li className="nav-item">*/}
              {/*  <Link to='/about' className="nav-link">*/}
              {/*    <Trans i18nKey='Menu_about'>About</Trans>*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li className="nav-item dropdown">*/}
              {/*  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"*/}
              {/*     aria-haspopup="true" aria-expanded="false">*/}
              {/*    <Trans i18nKey='Menu_languages'>Languages</Trans>*/}
              {/*  </a>*/}
              {/*  <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
              {/*    <a className="dropdown-item" onClick={() => this.changeLanguage('en')}>*/}
              {/*      <Trans i18nKey='Menu_english'>English</Trans>*/}
              {/*    </a>*/}
              {/*    <a className="dropdown-item" onClick={() => this.changeLanguage('es')}>*/}
              {/*      <Trans i18nKey='Menu_Spanish'>Spanish</Trans>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</li>*/}

              {this.context.isAuthenticated()
                ? this.renderAuthenticatedMenuItems()
                : this.renderUnauthemticatedMenuItems()}

            </ul>
          </span>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(withRouter(MenuSection));