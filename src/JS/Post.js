import React from "react";
import "../CSS/bootstrap.css";
import "../CSS/post.css";

const Post = props => (
  <div className="post">
    <div className="content">
      <h2>{props.title}</h2>
      <br />
      <div className="image_div">
      	<img alt="img" src="https://picsum.photos/500/500/?random"/>
      </div><br/>
      <label>{props.descriere}</label>
    </div>
  </div>
);
export default Post;
