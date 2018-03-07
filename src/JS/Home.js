import React, { Component } from "react";
import "../CSS/bootstrap.css";
import "../CSS/home.css";
import Post from "./Post";
let key = Object.keys(localStorage);
class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8 offset-1 home">
          {key.map(key => (
            <Post title={key} descriere={localStorage.getItem(key)} />
          ))}
        </div>
        <div className="col-2 home-find">
          <label>Find :</label>
          <input type="text" maxLength="50" />
          <br />
          <button className="btn btn-success">Find</button>
        </div>
      </div>
    );
  }
}
export default Home;
