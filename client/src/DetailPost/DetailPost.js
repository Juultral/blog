import React, { Component } from "react";
import axios from "axios";
import history from "../history";
import { Link } from "react-router-dom";
import "./detail_post.css";
import "../bootstrap.css";
import "../Post/post.css";

class DetailPost extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(`/api/posts/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deletePost = () => {
    if (window.confirm("Are you sure !?")) {
      axios
        .delete(`/api/posts/${this.props.match.params.id}`)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
      history.push("/");
      history.go("/");
    }
  };
  render() {
    return (
      <div id="detail_post" className="detail_post">
        <div className="post_title">
          <h2 className="titlu">{this.state.post.title}</h2>
          <button
            className="btn btn-danger float-right"
            onClick={this.deletePost}
          >
            Delete
          </button>
          <Link
            className="btn btn-info float-right mr-2"
            to={`/edit/${this.state.post._id}`}
          >
            Edit
          </Link>
        </div>
        <br />
        <div className="image_div" />
        <br />
        <div className="post_title">
          <label>{this.state.post.description}</label>
        </div>
      </div>
    );
  }
}

export default DetailPost;
