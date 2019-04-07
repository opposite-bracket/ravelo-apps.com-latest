import React, { Component } from 'react';
import { Trans, withTranslation } from 'react-i18next';

class AttendancePage extends Component {

  render() {
    return (
      <div>
        <Trans i18nKey='AttendancePage_title'>
          <p>You are now enrolled for the fundamentals!</p>
        </Trans>
      </div>
    );
  }
}

export default withTranslation()(AttendancePage);