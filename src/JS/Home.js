import React from "react";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router-redux";
import "../CSS/bootstrap.css";
import "../CSS/home.css";
import Post from "./Post";
import DetailPost from "./DetailPost";
let tit = Object.keys(localStorage);
let result = ["Nothing was found !!!"];
const serch_result = {
  display: "block"
};
const Home = () => (
  <div className="row mr-auto ml-5">
    <div className="col-9 home">
      {tit.map(title => (
        <div>
          <Post
            key={title}
            title={title}
            descriere={localStorage.getItem(title)}
          />
        </div>
      ))}
    </div>
    <div className="col-2 home-find">
      <p>Search :</p>
      <input id="find_word" type="text" maxLength="50" />
      <br />
      <button className="btn btn-success" onClick={find}>
        Find
      </button>
      <div id="rez" className="find_result" style={serch_result}>
        <hr />
        {result.map(rez => <li>{rez}</li>)}
      </div>
    </div>
  </div>
);
export default Home;
function find() {
  result.splice(0, result.length);
  let key = document.getElementById("find_word");
  for (let i = 0; i < tit.length; i++) {
    if (tit[i].toLowerCase().search(key.value.toLowerCase()) >= 0) {
      result.push(tit[i]);
    }
  }
  if (result.length == 0) {
    result.push("Nothing was found !!!");
    key.value = "";
  }
  document.getElementById("rez").style.display = "block";
  console.log(result);
}
