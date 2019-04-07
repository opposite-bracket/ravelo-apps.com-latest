import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from '../../context-providers/UserProvider';
import Menu from './MenuSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router>
    <UserProvider>
      <Menu />
    </UserProvider>
  </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
