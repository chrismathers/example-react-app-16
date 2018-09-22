import React, { Component } from 'react';
import './App.css';

import './components/Home'
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div id="root">
          <Home/>
      </div>
    );
  }
}

export default App;
