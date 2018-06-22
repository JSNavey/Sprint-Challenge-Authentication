import React, { Component } from 'react';

import './App.css';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SignIn />
      <SignUp />
      <Jokes />
      </div>
    );
  }
}

export default App;
