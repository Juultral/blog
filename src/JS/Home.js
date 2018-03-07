import React from "react";
import "../CSS/bootstrap.css";
import "../CSS/home.css";
import Post from "./Post";

const Home = () => (
  <div className="row">
    <div className="col-8 offset-1 home">
      <a id="post" href="/detail_post">
        <Post />
      </a>
      <a id="post" href="/detail_post">
        <Post />
      </a>
      <a id="post" href="/detail_post">
        <Post />
      </a>
      <a id="post" href="/detail_post">
        <Post />
      </a>
    </div>
    <div className="col-2 home-find">
      <label>Find :</label>
      <input type="text" maxlength="50" />
      <br />
      <button className="btn btn-success">Find</button>
    </div>
  </div>
);
export default Home;
