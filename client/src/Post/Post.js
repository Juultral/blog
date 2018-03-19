import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../bootstrap.css";
import "./post.css";

const Post = props => (
  <div className="post">
    <div className="content container">
      <div className="title col-sm-12">
        <h2>{props.title}</h2>
      </div>
      <br />
      <div className="image_div">
        <img src={props.image} alt="img_content" width="100%" height="auto" />
      </div>
      <br />
      <div className="title">
        <label>{props.description.substr(0, 300)}</label>
        <Link className="link_continue" to={`posts/${props._id}`}>
          &nbsp;&nbsp;... Continue reading
        </Link>
        <label className="float-right">
          <b>Posted on : {props.date}</b>
        </label>
      </div>
    </div>
  </div>
);
Post.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  _id: PropTypes.string
};
export default Post;
