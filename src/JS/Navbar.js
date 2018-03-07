import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../CSS/bootstrap.css";
import "../CSS/navbar.css";

const Navbar = () => (
  <div>
    <div className="navbar">
      <h2>My blog</h2>
      <div className="links">
        <a id="nav" className="btn btn-secondary" href="/">
          Home
        </a>
        <a id="nav" className="btn btn-secondary" href="/new_post">
          New Post
        </a>
      </div>
    </div>
  </div>
);
export default Navbar;
