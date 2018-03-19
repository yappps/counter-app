import React, { Component } from "react";

import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  render() {
    return (
      <div id="main-counter">
        <button onClick={this.decreaseCount}>+</button>
        {this.state.count}
        <button onClick={this.increaseCount}>-</button>
      </div>
    );
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }
}

export default Counter;
