import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Nav from './Nav.jsx';
import './App.css';


class App extends Component {
  state = {
    posts:[]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({posts: response.data});
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Nav />
      </div>
    );
  }
}

export default App;
