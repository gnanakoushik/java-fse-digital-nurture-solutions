import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, message: '' };
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  sayHello = () => {
    this.setState({ message: 'Hello from EventExamples' });
  };

  increaseBoth = () => {
    // invoke multiple methods when Increase button clicked
    this.increment();
    this.sayHello();
  };

  sayWelcome = (text) => {
    this.setState({ message: text });
  };

  handlePress = (e) => {
    // synthetic event handler
    e.preventDefault();
    this.setState({ message: 'I was clicked' });
  };

  render() {
    const { count, message } = this.state;
    return (
      <div>
        <h2>Event Examples</h2>
        <p>Count: {count}</p>

        <button onClick={this.increaseBoth}>Increase (calls two methods)</button>
        <button onClick={this.increment} style={{ marginLeft: 8 }}>Increment</button>
        <button onClick={this.sayHello} style={{ marginLeft: 8 }}>Say Hello</button>

        <div style={{ marginTop: 12 }}>
          <button onClick={() => this.sayWelcome('Welcome')}>Say Welcome</button>
        </div>

        <div style={{ marginTop: 12 }}>
          <button onClick={this.handlePress}>OnPress (synthetic event)</button>
        </div>

        {message && <p><strong>Message:</strong> {message}</p>}
      </div>
    );
  }
}

export default EventExamples;
