import React, { Component } from "react";
import moment from "moment";
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
        <div className="container col-12" style={{ margin: "0px" }}>
          <div className="navbar row">
            <div>
              <a href="/">
                <h2>My blog</h2>
              </a>
            </div>
            <div className="links col-4">
              <div className="menu">
                <Link className="btn btn-secondary mr-3" to="/">
                  Home
                </Link>
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
        <div className="container col-lg-12" style={{ margin: "0px" }}>
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
