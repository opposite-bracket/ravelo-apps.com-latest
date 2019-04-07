import React, { Component, createContext, Fragment } from 'react';
import Axios from 'axios';

export const UserContext = createContext();

const URL = '/api/ims/users';
const COOKIE_NAME = 'ut'; // User Token

export class UserProvider extends Component {

  state = {
    user: null
  };

  constructor(props) {
    super(props);
    //
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  async componentDidMount() {
    const ut = this.getCookie(COOKIE_NAME);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${ut}`;
    const response = await Axios.get(`${URL}/current`);
    this.setState({
      user: response.data.data
    })
  }

  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  isAuthenticated () {
    return this.state.user !== null;
  }

  async signIn (email, password) {
    const user = await Axios.post(`${URL}/sign-in`, {
      email,
      password
    });
    this.setCookie(COOKIE_NAME, user.data.data.token, 2);
    console.log('sign in', user.data.data.token);
    this.setState({ user: user.data.data });
  }

  async signUp (email, password) {
    const user = await Axios.post(`${URL}/sign-up`, {
      email,
      password
    });
    this.setCookie(COOKIE_NAME, user.data.data.token, 2);
    console.log('sign in', user.data.data.token);
    this.setState({ user });
  }

  signOut () {
    this.setState({user: null});
    this.setCookie(COOKIE_NAME, '', -1);
    console.log('signed out');
  }

  render () {
    return (<Fragment>
      <UserContext.Provider value={{
        user: this.state,
        isAuthenticated: this.isAuthenticated,
        signIn: this.signIn,
        signUp: this.signUp,
        signOut: this.signOut
      }}>
        {this.props.children}
      </UserContext.Provider>
    </Fragment>);
  }
}