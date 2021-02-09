import React from 'react';
import './base.css'
import './basebtn.css'
import './baselink.css'
import Login from './container/login'
import Homepage from './container/Homepage'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store = {Store}>
      <Router >
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
