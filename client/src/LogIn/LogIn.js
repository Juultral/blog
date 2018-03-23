import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../history";
import "./log_in.css";

class LogIn extends Component {
  state = {
    users: []
  };
  logIn = e => {
    e.preventDefault();
    let logIn = true;
    let pass = document.getElementById("inputPassword").value;
    let login = document.getElementById("inputEmail").value;
    for (let i = 0; i < this.state.users.length; i++) {
      if (
        this.state.users[i].login === login &&
        this.state.users[i].password === pass
      ) {
        logIn = false;
        localStorage.setItem("log_in", this.state.users[i]._id);
        history.push("/");
        history.go("/");
      }
    }
    if (logIn) {
      document.getElementById("errors").style.display = "block";
      document.getElementById("err").innerHTML = "Incorrect password or login";
    }
  };
  componentDidMount() {
    axios
      .get("/api/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="card card-container">
          <div
            style={{ display: "none", color: "red", textAlign: "center" }}
            id="errors"
          >
            <p id="err" />
          </div>
          <br />
          <h3 style={{ textAlign: "center" }}>Log in</h3>
          <form className="form-signin" onSubmit={this.logIn}>
            <span id="reauth-email" className="reauth-email" />
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address / Login"
              required
              autoFocus
              onChange={this.changeLogin}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <button
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Log in
            </button>
            <p style={{ width: "100%", textAlign: "center" }}>
              <Link className="" to="/sign_up">
                Don't have an account?
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default LogIn;
