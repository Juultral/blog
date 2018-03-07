import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import DetailPost from "./DetailPost";
import NewPost from "./New_post";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../CSS/App.css";

const App = () => (
  <div>
    <div className="app">
      <Navbar />
      <Route exact path="/detail_post" component={DetailPost} />
      <Route exact path="/" component={Home} />
      <Route exact path="/new_post" component={NewPost} />
    </div>
    <Footer />
  </div>
);
export default App;
