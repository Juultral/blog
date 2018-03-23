import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import history from "../history";
import "../bootstrap.css";
import "./new_post.css";

class NewPost extends Component {
  state = {
    title: "",
    description: "",
    image: null
  };
  changeTitle = x => {
    this.setState({
      title: x.target.value
    });
  };
  changeDescription = x => {
    this.setState({
      description: x.target.value
    });
  };
  changeImage = x => {
    this.setState({
      image: x.target.files[0]
    });
  };
  submit = x => {
    x.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image);
    formData.append("date", moment().format("llll"));
    formData.append("idUser", localStorage.getItem("log_in"));
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("/api/posts", formData, config)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    history.push("/");
    history.go("/");
  };
  cancel = () => {
    document.getElementById("post_content").reset();
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-5 mr-0 mb-5 pl-0">
          <div className="col-12 pr-0">
            <div className="new_post">
              <h1>New post</h1>
              <br />
              <form id="post_content" onSubmit={this.submit}>
                <div class="form-group">
                  <label for="title">Titlu:</label>
                  <input
                    className="form-control"
                    value={this.state.title}
                    id="title"
                    name="title"
                    type="text"
                    maxLength="250"
                    placeholder="Titlul"
                    required
                    onChange={this.changeTitle}
                  />
                </div>
                <input
                  type="file"
                  onChange={this.changeImage}
                  name="image"
                  className="mt-2"
                />
                <br />
                <br />
                <div className="form-group">
                  <label for="description" className="float-left">
                    Descrierea : &nbsp;
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="8"
                    maxLength="3000"
                    minLength="300"
                    required
                    onChange={this.changeDescription}
                    value={this.state.description}
                  />
                </div>
                <input type="submit" className="btn btn-success float-left" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPost;
