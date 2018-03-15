import React from "react";
import { Link } from "react-router-dom";
import "../CSS/bootstrap.css";
import "../CSS/post.css";

const Post = props => (
  <div className="post">
    <div className="content">
      <div className="title">
        <h2>{this.props.title}</h2>
      </div>
      <br />
      <div className="image_div" />
      <br />
      <div className="title">
        <label>{this.props.description.substr(0, 300)}</label>
        <Link className="link_continue" to={`posts/${props._id}`}>
          &nbsp;&nbsp;... Continue reading
        </Link>
      </div>
    </div>
  </div>
);
export default Post;
