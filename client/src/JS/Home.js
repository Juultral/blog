import React, { Component } from "react";
import axios from "axios";
import "../CSS/bootstrap.css";
import "../CSS/home.css";
import Post from "./Post";
import Search from "./Search";

class Home extends Component {
  serch_result = {
    display: "none"
  };
  state = {
    show_find: false,
    result: ["Nothing was found !!!"],
    posts: []
  };

  componentDidMount() {
    axios
      .get("/api/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  find = () => {};
  show_result = e => {
    e.preventDefault();
    this.setState({
      result: this.state.result.splice(0, this.state.result.length)
    });
    let key = document.getElementById("find_word");
    if (key.value.length > 2) {
      for (let i = 0; i < this.state.tit.length; i++) {
        if (
          this.state.tit[i].toLowerCase().search(key.value.toLowerCase()) >= 0
        ) {
          this.state.result.push(this.state.tit[i]);
        }
      }
    }
    if (this.state.result.length === 0) {
      this.state.result.push("Nothing was found !!!");
      key.value = "";
    }
    this.setState({ show_find: true });
  };
  render() {
    return (
      <div className="row mr-auto ml-5">
        <div className="col-9 home">
          {this.state.posts.map(post => <Post {...post} key={post._id} />)}
        </div>
        <div className="col-2 home-find">
          <form className="form-group">
            <p>Search :</p>
            <input
              className="form-control"
              id="find_word"
              type="text"
              maxLength="50"
            />
            <br />
            <button className="btn btn-success ml-4" onClick={this.show_result}>
              Find
            </button>
          </form>
          <div>
            {this.state.show_find ? (
              <Search rezult={this.state.result} />
            ) : null}
          </div>
          <div />
        </div>
      </div>
    );
  }
}
export default Home;
