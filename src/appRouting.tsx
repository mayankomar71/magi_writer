import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './components/Homepage/homePage'
import Login from './components/Login/login'
import Dashboard from './components/DashBoard/dashBoard'
import SearchArticle from './components/searchArticle/searchArticle'
import WriteArticle from './components/writeArticle/writeArticle'
import SignUp from './components/signUp/signUp'
import AboutUs from './components/aboutUs/aboutUs';
import ContactUs from './components/contactUs/contactUs';

// eslint-disable-next-line 

class AppLoad extends Component<any, any> {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/dashboard" component={() => <Dashboard />} />
            <Route exact path="/searcharticle" component={() => <SearchArticle />} />
            <Route exact path="/writearticle" component={() => <WriteArticle />} />
            <Route exact path="/signup" component={() => <SignUp />} />
            <Route exact path="/aboutus" component={() => <AboutUs />} />
            <Route exact path="/contactus" component={() => <ContactUs />} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppLoad;
