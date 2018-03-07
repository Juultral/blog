import React from "react";
import "../CSS/bootstrap.css";
import "../CSS/new_post.css";
const fs = require("fs");

const NewPost = () => (
  <div className="new_post">
    <h1>New post</h1>
    <br />
    <form id="post_content">
      <div className="row">
        <div className="col-10 offset-1">
          <label>Titlu : </label>
          <input id="titlu" type="text" maxLength="250" placeholder="Titlul" />
          <br />
          <label id="descriere">Descrierea : </label>
          <br />
          <textarea id="post_textare" rows="8" />
          <br />
          <button type="button" className="btn btn-success" onClick={posts}>
            Post
          </button>
          <button type="button" className="btn btn-danger" onClick={cancel}>
            Reset
          </button>
        </div>
      </div>
    </form>
  </div>
);
export default NewPost;
function posts() {
  let title = document.getElementById("titlu").value;
  let descript = document.getElementById("post_textare").value;
}
function cancel() {
  document.getElementById("post_content").reset();
}
