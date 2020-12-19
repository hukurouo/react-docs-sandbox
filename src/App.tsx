import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeClass from './ClassComponent';
import Hello from './FunctionComponent'
import Clock from './Clock'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React-Sandbox
      </header>
      <Hello name="nish"/> - FunctionComponent
      <WelcomeClass name="nish"/> - ClassComponent
      <Clock />
      <Counter increment={1}/>
      <Counter increment={2}/>
    </div>
  );
}

export default App;
