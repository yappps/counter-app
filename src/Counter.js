import React, { Component } from "react";
import "./Counter.css";
import UpvoteButton from "./UpvoteButton";
import DownVoteButton from "./DownVoteButton";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0 // default value
    };

    // need to assign it to 'this.increaseCount' because the value is not save in the memory
    this.increaseCount = this.increaseCount.bind(this);
    // this.decreaseCount = this.decreaseCount.bind(this);
  }

  // increaseCount function 
  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decreaseCount() {
    this.setState({ count: this.state.count - 1 });
  }
  
  render() {
    // console.log(this.props)
    // this.props.shout()
    return (
      <div id="main-counter">
        <DownVoteButton minus={this.decreaseCount.bind(this)} />
        {this.state.count}
        <UpvoteButton plus={this.increaseCount} />
      </div>
    );
  }
}

export default Counter;
