import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = { entryCount: 0, exitCount: 0 };
  }

  updateEntry = () => {
    this.setState((prev) => ({ entryCount: prev.entryCount + 1 }));
  };

  updateExit = () => {
    this.setState((prev) => ({ exitCount: prev.exitCount + 1 }));
  };

  render() {
    const { entryCount, exitCount } = this.state;
    return (
      <div>
        <h2>People Counter</h2>
        <p>Entered: {entryCount}</p>
        <p>Exited: {exitCount}</p>
        <button onClick={this.updateEntry}>Login</button>
        <button onClick={this.updateExit} style={{ marginLeft: 8 }}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
