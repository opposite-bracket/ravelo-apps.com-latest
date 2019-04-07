import React, { Component } from 'react';
import { Trans, withTranslation } from 'react-i18next';

class AboutPage extends Component {

  render() {
    return (
      <div>
        <h1>
          <Trans i18nKey='AboutPage_title'>About page</Trans>
        </h1>
      </div>
    );
  }
}

export default withTranslation()(AboutPage);