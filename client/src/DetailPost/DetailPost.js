import React, { Component } from "react";
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
      <div className="row mr-0 ml-auto mb-2">
        <div id="detail_post" className="col-sm-10 mx-auto">
          <div className="detail_post">
            <div className="post_title">
              <div className="row">
                <div className="col-9 mx-auto">
                  <h4 className="mx-auto">{this.state.post.title}</h4>
                </div>
                <div className="col-2 float-right mx-auto">
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
                  <p
                    className="ml-auto"
                    style={{ margin: "10px", fontSize: "12px" }}
                  >
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
