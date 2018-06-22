import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/register' component={SignUp}/>
        <Route path='/jokes' component={Jokes}/>
      </Switch>
      </div>
    );
  }
}

export default App;
