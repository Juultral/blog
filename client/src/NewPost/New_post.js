import React, { Component } from "react";
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
      <div className="new_post">
        <h1>New post</h1>
        <br />
        <form id="post_content" onSubmit={this.submit}>
          <div className="row">
            <div className="col-10 offset-1">
              <label>Titlu : </label>
              <input
                value={this.state.title}
                id="title"
                name="title"
                type="text"
                maxLength="250"
                placeholder="Titlul"
                required
                onChange={this.changeTitle}
              />
              <input type="file" onChange={this.changeImage} name="image" />
              <br />
              <label className="float-left">Descrierea : </label>
              <br />
              <textarea
                id="description"
                name="description"
                rows="8"
                maxLength="1000"
                required
                onChange={this.changeDescription}
                value={this.state.description}
              />
              <br />
              <input type="submit" className="btn btn-success" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NewPost;
