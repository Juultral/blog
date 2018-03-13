import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import DetailPost from "./DetailPost";
import NewPost from "./New_post";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Edit from "./Edit";
import NotFound from "./NotFound";
import "../CSS/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts/:id" component={DetailPost} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/new_post" component={NewPost} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
