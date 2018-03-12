import React, { Component } from "react";
import "../CSS/bootstrap.css";
import "../CSS/edit.css";
class Edit extends Component {
  state = {
    title: "",
    descriere: ""
  };

  set = () => {
    document.getElementById(
      "titlu"
    ).value = `${this.props.match.params.id.split("_").join(" ")}`;
    document.getElementById("post_textare").value = `${localStorage.getItem(
      this.props.match.params.id.split("_").join(" ")
    )}`;
  };
  componentDidMount() {
    let title = `${this.props.match.params.id.split("_").join(" ")}`;
    this.set();
    localStorage.removeItem(title);
  }
  render() {
    return (
      <div className="new_post">
        <h1>New post</h1>
        <br />
        <form id="post_content">
          <div className="row">
            <div className="col-10 offset-1">
              <label>Titlu : </label>
              <input
                id="titlu"
                type="text"
                maxLength="250"
                placeholder="Titlul"
              />
              <br />
              <label id="descriere">Descrierea : </label>
              <br />
              <textarea id="post_textare" rows="8" />
              <br />
              <button type="button" className="btn btn-success" onClick={posts}>
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Edit;

function posts() {
  let title = document.getElementById("titlu").value;
  let descript = document.getElementById("post_textare").value;
  localStorage.setItem(title, descript);
  document.location.replace("/");
}
