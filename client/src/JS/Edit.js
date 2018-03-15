import React, { Component } from "react";
import axios from "axios";
import history from "../history";
import "../CSS/bootstrap.css";
import "../CSS/edit.css";

class Edit extends Component {
  state = {
    title: "",
    description: "",
    post: []
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
  set = () => {
    this.setState({
      title: this.state.post.title,
      description: this.state.post.description
    });
    document.getElementById("titlu").value = `${this.state.post.title}`;
    document.getElementById("post_textare").value = `${
      this.state.post.description
    }`;
  };
  edit = x => {
    x.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description
    };

    axios
      .patch(`/api/posts/${this.props.match.params.id}`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    history.goBack();
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
              <br />
              <label id="descriere">Descrierea : </label>
              <br />
              <textarea
                id="post_textare"
                rows="8"
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
