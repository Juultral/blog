import React from "react";
import "../CSS/bootstrap.css";
import "../CSS/post.css";

const Post = props => (
  <div className="post">
    <div className="content">
      <h2>{props.titlu}</h2>
      <br />
      <label>{props.descriere}</label>
    </div>
  </div>
);
export default Post;
