import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import DetailPost from "./DetailPost";
import NewPost from "./New_post";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Edit from "./Edit";
import "../CSS/App.css";

const App = () => (
  <div>
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/:id" component={DetailPost} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/new_post" component={NewPost} />
    </div>
    <Footer />
  </div>
);
export default App;
