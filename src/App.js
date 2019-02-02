import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  add() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        <span className="count-box">{this.state.count}</span>
        <button onClick={this.add.bind(this)}>click me!</button>
      </div>
    );
  }
}

export default App;