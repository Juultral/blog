import React from "react";
import { Link } from "react-router-dom";
import {Redirect, withRouter} from 'react-router-redux'
import "../CSS/bootstrap.css";
import "../CSS/home.css";
import Post from "./Post";
import DetailPost from "./DetailPost"
let tit = Object.keys(localStorage);
const Home = () => (
  <div className="row">
    <div className="col-8 offset-1 home">
      {tit.map(title => (
        <div>
        <Link to={`posts/${title}`}>
          <Post title={title} descriere={localStorage.getItem(title)} />
        </Link>
        </div>
      ))}
    </div>
    <div className="col-2 home-find">
      <p >Find :</p>
      <input id="find_word" type="text" maxLength="50" />
      <br />
      <button className="btn btn-success" onClick={find}>Find</button>
    </div>
  </div>
);
export default Home;
function find(){
  let x = document.getElementById("find_word").value;
  for(let i=0;i<tit.length;i++){
    if(tit[i]==x){   
      <Redirect to='/new_post'/>
      break;
    }
  }
}

