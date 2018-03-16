import React, { Component } from "react";
import axios from "axios";
import history from "../history";
import "../bootstrap.css";
import "./edit.css";

class Edit extends Component {
  state = {
    title: "",
    description: "",
    image: null,
    post: []
  };
  changeTitle = x => {
    this.setState({
      title: x.target.value
    });
  };
  changeImage = x => {
    this.setState({
      image: x.target.files[0]
    });
  };
  changeDescription = x => {
    this.setState({
      description: x.target.value
    });
  };
  set = () => {
    this.setState({
      title: this.state.post.title,
      description: this.state.post.description,
      image: this.state.post.image
    });
    document.getElementById("titlu").value = `${this.state.post.title}`;
    document.getElementById("post_textare").value = `${
      this.state.post.description
    }`;
  };
  edit = x => {
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
      .patch(`/api/posts/${this.props.match.params.id}`, formData, config)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    history.push("/");
    history.go("/");
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(`/api/posts/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
        this.set();
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="new_post">
        <h1>Edit post</h1>
        <br />
        <form id="post_content" onSubmit={this.edit}>
          <div className="row">
            <div className="col-10 offset-1">
              <label>Titlu : </label>
              <input
                id="titlu"
                type="text"
                maxLength="250"
                placeholder="Titlul"
                required
                onChange={this.changeTitle}
              />
              <input type="file" onChange={this.changeImage} name="image" />
              <br />
              <label id="descriere">Descrierea : </label>
              <br />
              <textarea
                id="post_textare"
                rows="8"
                maxLength="1000"
                required
                onChange={this.changeDescription}
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
export default Edit;
