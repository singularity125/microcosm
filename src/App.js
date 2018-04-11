import React, { Component } from 'react';
import logo from './logo.svg';
import './bootstrap-theme.css';
import './App.css';


class TopMenu extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    )
  }
}

class Game extends Component {

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
