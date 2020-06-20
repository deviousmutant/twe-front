import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard'
import UserForm from './components/form/UserForm'
import { CookiesProvider } from 'react-cookie'


const routing = (
  <CookiesProvider>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/welcome" component={UserForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  </CookiesProvider>
)
ReactDOM.render(routing, document.getElementById('root'))


