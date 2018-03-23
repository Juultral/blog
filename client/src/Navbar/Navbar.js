import React, { Component } from "react";
import history from "../history";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  log_out = () => {
    localStorage.clear();
    history.push("/");
    history.go("/");
  };
  render() {
    if (localStorage.getItem("log_in")) {
      return (
        <div className="navbar">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-4">
              <a href="/">
                <h2>My blog</h2>
              </a>
            </div>
            <div className="links col-4 ml-auto">
              <div className="menu">
                <a className="btn btn-secondary mr-3" href="/">
                  Home
                </a>
                <Link className="btn btn-secondary" to="/new_post">
                  New Post
                </Link>
                <button
                  className="btn btn-secondary ml-3"
                  onClick={this.log_out}
                >
                  Log out
                </button>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/">
                    Home
                  </a>
                  <a className="dropdown-item" href="/new_post">
                    New Post
                  </a>
                  <a className="dropdown-item" onClick={this.log_out}>
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%" }}>
          <div className="navbar">
            <a href="/">
              <h2>My blog</h2>
            </a>
            <div className="links">
              <Link className="btn btn-secondary ml-3" to="/sign_up">
                Register
              </Link>
              <Link className="btn btn-secondary ml-3" to="/log_in">
                Log in
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Navbar;
