import React from 'react';
import ReactDOM from 'react-dom';
import AttendancePage from './AttendancePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttendancePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
