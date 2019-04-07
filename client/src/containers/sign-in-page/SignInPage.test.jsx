import React from 'react';
import ReactDOM from 'react-dom';
import SignInPage from './SignInPage';
import {BrowserRouter as Router} from "react-router-dom";

describe('SignInPage component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><SignInPage /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('test form submission', () => {
  //
  //   const wrapper = shallow(<SignInPage />);
  //   wrapper.find('form').simulate('submit', {
  //     preventDefault() {},
  //     target: {
  //       elements: {
  //         email: { name: 'email', value: 'test@test.ca' },
  //         password: { name: 'password', value: 'letmein' },
  //       }
  //     }
  //   });
  //
  // });

});