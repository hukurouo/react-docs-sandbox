import React from 'react';
type typeCounterState = {
  counter: number
}
type typeCounterProps = {
  increment: number
}
class Counter extends React.Component<typeCounterProps, typeCounterState> {
  constructor(props: typeCounterProps) {
    super(props);
    this.state = {counter: 0};
  }

  increment = () => {
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.counter}.</h2>
        <button className="square_highlight" onClick={this.increment}>
          inc {this.props.increment}
        </button>
      </div>
    );
  }
}
export default Counter;