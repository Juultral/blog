import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/detail_post.css";
import "../CSS/bootstrap.css";
import "../CSS/post.css";

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
  render() {
    return (
      <div id="detail_post" className="detail_post">
        <div className="post_title">
          <h2 className="titlu">{this.props.title}</h2>
          <button className="btn btn-danger float-right">Delete</button>

          <Link
            className="btn btn-info float-right mr-2"
            {...this.props}
            to={`/edit/${this.props.match.params.id}`}
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
          <label>{this.props.description}</label>
        </div>
      </div>
    );
  }
}

export default DetailPost;
