import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import HomePage from './components/Homepage/homePage'

class AppLoad extends Component<any, any> {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppLoad;
