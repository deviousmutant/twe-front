import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import UserForm from './components/form/UserForm'
import Home from './components/edition/home'


const routing = (
  <Router basename={'/twe'}>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/welcome" component={UserForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/edition" component={Home} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


