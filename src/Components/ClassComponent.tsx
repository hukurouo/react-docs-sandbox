import React from 'react';
type WelcomeclassType = {
  name: string;
}
class WelcomeClass extends React.Component<WelcomeclassType> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default WelcomeClass;