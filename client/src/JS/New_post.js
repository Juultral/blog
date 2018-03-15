import React, { Component } from "react";
import "../CSS/bootstrap.css";
import "../CSS/new_post.css";
import axios from "axios";
import history from "../history";
class NewPost extends Component {
  state = {
    title: "",
    description: ""
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
  submit = x => {
    x.preventDefault();
    console.log("request post");
    const data = {
      title: this.state.title,
      description: this.state.description
    };
    axios
      .post("/api/posts", data)
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
                id="titlu"
                type="text"
                maxLength="250"
                placeholder="Titlul"
                required
                onChange={this.changeTitle}
              />
              <br />
              <label className="float-left">Descrierea : </label>
              <br />
              <textarea
                id="post_textare"
                rows="8"
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
