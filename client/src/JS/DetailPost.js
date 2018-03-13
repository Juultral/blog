import React from "react";
import { Link } from "react-router-dom";
import "../CSS/detail_post.css";
import "../CSS/bootstrap.css";
import "../CSS/post.css";
const DetailPost = props => (
  <div id="detail_post" className="detail_post">
    {window.scrollTo(0, 0)}
    <div className="post_title">
      <h2 className="titlu">{props.match.params.id.split("_").join(" ")}</h2>
      <button className="btn btn-danger float-right" onClick={() => del(props)}>
        Delete
      </button>

      <Link
        className="btn btn-info float-right mr-2"
        {...props}
        to={`/edit/${props.match.params.id}`}
      >
        Edit
      </Link>
    </div>
    <br />
    <div className="image_div">
      <img alt="img" src="https://picsum.photos/500/500/?random" />
    </div>
    <br />
    <div className="post_title">
      <label>
        {localStorage.getItem(props.match.params.id.split("_").join(" "))}
      </label>
    </div>
  </div>
);
function del(props) {
  if (window.confirm("Are you sure !?")) {
    localStorage.removeItem(props.match.params.id.split("_").join(" "));
    document.location.replace("/");
  }
}
export default DetailPost;
