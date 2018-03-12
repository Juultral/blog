import React from "react";
import { Link } from "react-router-dom";
import "../CSS/bootstrap.css";
import "../CSS/post.css";

const Post = props => (
  <div className="post">
    <div className="content">
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <br />
      <div className="image_div">
        <img alt="img" src="https://picsum.photos/500/500/?random" />
      </div>
      <br />
      <div className="title">
        <label>{props.descriere.substr(0, 300)}</label>
        <Link
          className="link_continue"
          to={`posts/${props.title.split(" ").join("_")}`}
        >
          &nbsp;&nbsp;... Continue reading
        </Link>
      </div>
    </div>
  </div>
);
export default Post;
