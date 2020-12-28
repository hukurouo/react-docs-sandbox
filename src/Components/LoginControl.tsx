import React from 'react';
import Greeting from './Greeting';

function LoginButton(props: any) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props: any) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

type LoginControlType = {
  isLoggedIn: boolean
  state: string
}

class LoginControl extends React.Component<{}, LoginControlType> {
  constructor(props:{}) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false, state: ''};
  }

  async handleLoginClick() {
    const res = await apitest()
    this.setState({isLoggedIn: true, state: res});
    console.log(res)
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {this.state.state}
      </div>
    );
  }
}

export default LoginControl;

async function apitest(){
  const needle = require("needle");
  const endpointURL =
    "https://script.google.com/macros/s/AKfycbycrq_xy21HK9N2wY1EBoOum446zuSVgDqM1JnCriv2Yd8c3HQ/exec"
  const res = await needle("get", endpointURL);
    if (res.body) {
      return res.body.message;
    } else {
      return "error"
    }
}