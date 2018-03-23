import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import DetailPost from "./DetailPost/DetailPost";
import NewPost from "./NewPost/New_post";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Edit from "./EditPost/Edit";
import NotFound from "./Page_404/NotFound";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
import NotLogIn from "./Page_404/NotLogIn";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    if (localStorage.getItem("log_in")) {
      return (
        <div>
          <div className="app">
            <Navbar />
            <Switch>
              <Route exact path="/" store={this.props} component={Home} />
              <Route path="/posts/:id" component={DetailPost} />
              <Route path="/edit/:id" component={Edit} />
              <Route path="/new_post" component={NewPost} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <div className="app">
            <Navbar />
            <Switch>
              <Route path="/sign_up" component={SignUp} />
              <Route path="/log_in" component={LogIn} />
              <Route path="*" component={NotLogIn} />
            </Switch>
          </div>
          <Footer />
        </div>
      );
    }
  }
}
export default App;
