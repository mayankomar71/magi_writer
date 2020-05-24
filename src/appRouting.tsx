import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/Homepage/homePage'
import Login from './components/Login/login'
import Dashboard from './components/DashBoard/dashBoard'

class AppLoad extends Component<any, any> {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppLoad;
