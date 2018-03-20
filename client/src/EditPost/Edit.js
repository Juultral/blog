import React, { Component } from "react";
import moment from "moment";
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
    document.getElementById("title").value = `${this.state.post.title}`;
    document.getElementById("description").value = `${
      this.state.post.description
    }`;
  };
  edit = x => {
    x.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image);
    formData.append("date", moment().format("llll"));
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
      <div className="container">
        <div className="row mt-5 mr-0 mb-5 pl-0">
          <div className="col-12 pr-0">
            <div className="new_post">
              <h1>Edit post</h1>
              <br />
              <form id="post_content" onSubmit={this.edit}>
                <div className="form-group">
                  <label>Titlu:</label>
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
                  id="image"
                  type="file"
                  onChange={this.changeImage}
                  name="image"
                  className="mt-2"
                />
                <br />
                <br />
                <div className="form-group">
                  <label className="float-left">Descrierea : &nbsp;</label>
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
export default Edit;
