import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeClass from './Components/ClassComponent';
import Hello from './Components/FunctionComponent'
import Clock from './Components/Clock'
import Counter from './Components/Counter'
import LoginControl from './Components/LoginControl';
import NameForm from './Components/NameForm'

type SplitPanePropsType = {
  left: JSX.Element
  right : JSX.Element
}
function SplitPane(props: SplitPanePropsType) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React-Sandbox
      </header>
      <div className="App-body">
        <SplitPane
          left={<Hello name="spctr" />}
          right={<WelcomeClass name="hukurouo" />} 
        />
        <Clock />
        <Counter increment={1}/>
        <Counter increment={2}/>
        <LoginControl />
        <NameForm />
      </div>
      <footer className="App-footer">
        by hukurouo
      </footer>
    </div>
  );
}

export default App;
