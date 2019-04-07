import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from "./context-providers/UserProvider";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProvider>
    <App />
  </UserProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
