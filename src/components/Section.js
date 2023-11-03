import { useState } from "react";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementValue = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  };

  decrementValue = () => {
    this.setState((state) => ({
      value: state.value - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Local State in ReactJS</h3>
          <h5>The value managed locally is: {this.state.value}</h5>
          <div>
            <button onClick={this.incrementValue}>Increment!</button>{" "}
            <button onClick={this.decrementValue}>Decrement!</button>
            <a target="_blank" href={"https://www.facebook.com"}>Example1</a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;