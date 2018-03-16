import React, { Component } from "react";
import axios from "axios";
import history from "../history";
import "./sign_up.css";

class SignUp extends Component {
  state = {
    login: "",
    nickname: "",
    password: ""
  };
  changeLogin = e => {
    this.setState({
      login: e.target.value
    });
  };
  changeNickname = e => {
    this.setState({
      nickname: e.target.value
    });
  };
  changePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  register = e => {
    e.preventDefault();
    if (
      document.getElementById("inputPassword").value === this.state.password
    ) {
      axios
        .post("./api/users", this.state)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      history.push("/log_in");
      history.go("/log_in");
    } else {
      alert("Password don't match");
    }
  };
  render() {
    return (
      <div className="container">
        <div className="card card-container">
          <h3 style={{ textAlign: "center" }}>Register</h3>
          <form className="form-signin" onSubmit={this.register}>
            <span id="reauth-email" className="reauth-email" />
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              value={this.state.login}
              onChange={this.changeLogin}
            />
            <input
              type="text"
              id="nickname"
              className="form-control"
              placeholder="Nickname"
              required
              autoFocus
              value={this.state.nickname}
              onChange={this.changeNickname}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <input
              type="password"
              id="inputPassword_repeat"
              className="form-control"
              placeholder="Repeat Password"
              required
              onChange={this.changePassword}
            />
            <button
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default SignUp;
