import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import DetailPost from "./DetailPost/DetailPost";
import NewPost from "./NewPost/New_post";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Edit from "./EditPost/Edit";
import NotFound from "./Page_404/NotFound";
import "./App.css";

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
