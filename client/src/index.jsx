import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import * as serviceWorker from './serviceWorker';
import Spinner from './containers/spinner/Spinner';
import App from './App';
import { UserProvider } from './context-providers/UserProvider';
import I18n from './I18n';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/popper.js/dist/popper.min';

ReactDOM.render(<Suspense fallback={<Spinner />}>
  <I18nextProvider i18n={I18n}>
      <UserProvider>
        <App />
      </UserProvider>
  </I18nextProvider>
</Suspense>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
