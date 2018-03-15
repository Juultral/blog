import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.css";
import "./navbar.css";

const Navbar = () => (
  <div>
    <div className="navbar">
      <a href="/">
        <h2>My blog</h2>
      </a>
      <div className="links">
        <Link className="btn btn-secondary mr-3" to="/">
          Home
        </Link>
        <Link className="btn btn-secondary" to="/new_post">
          New Post
        </Link>
      </div>
    </div>
  </div>
);
export default Navbar;
