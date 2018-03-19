import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
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
    axios
      .delete(`/api/posts/${this.props.match.params.id}`)
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
    history.push("/");
    history.go("/");
  };
  render() {
    return (
      <div className="row">
        <div id="detail_post" className="col-sm-11 mx-auto">
          <div className="detail_post">
            <div className="post_title">
              <div className="row">
                <h2 className="mx-auto">{this.state.post.title}</h2>
                <div className="col-sm-2 offset-10">
                  <button
                    className="btn btn-danger float-right"
                    onClick={() => {
                      document.getElementById("confirm").style.display =
                        "block";
                    }}
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
              </div>
            </div>
            <br />
            <div className="image_div">
              <div id="confirm" className="confirm_delete">
                <h5>Are you sure?</h5>
                <button
                  id="yes"
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deletePost}
                >
                  Yes
                </button>
                <button
                  id="no"
                  type="button"
                  className="btn btn-success ml-3"
                  onClick={() => {
                    document.getElementById("confirm").style.display = "none";
                  }}
                >
                  No
                </button>
              </div>
              <img
                src={this.state.post.image}
                alt="img_content"
                width="100%"
                height="auto"
              />
            </div>
            <br />
            <div className="post_title">
              <label>
                {this.state.post.description}
                <b>
                  <p className="ml-auto" style={{ margin: "10px" }}>
                    Posted on : {this.state.post.date}
                  </p>
                </b>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
DetailPost.propTypes = {
  post: PropTypes.array
};
export default DetailPost;
