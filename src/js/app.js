import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from './store';

import Main from './scenes/Main';

class App extends Component {
  render() {
    return (
      <Router history={history} onUpdate={() => { window.scrollTo(0, 0); }} onChange={() => { console.log(this); }}>
        <Switch>
          <Route path="/" name="Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
