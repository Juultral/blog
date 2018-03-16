import React, { Component } from "react";
import axios from "axios";
import "../bootstrap.css";
import "./home.css";
import Post from "../Post/Post";
import Search from "../Search/Search";

class Home extends Component {
  serch_result = {
    display: "none"
  };
  state = {
    show_find: false,
    result: ["Nothing was found !!!"],
    id_rez: [],
    posts: []
  };
  show_result = e => {
    let rezultate = [];
    let id_rezultate = [];
    e.preventDefault();
    this.setState({
      result: this.state.result.splice(0, this.state.result.length)
    });
    let key = document.getElementById("find_word");
    if (key.value.length > 2) {
      for (let i = 0; i < this.state.posts.length; i++) {
        if (
          this.state.posts[i].title
            .toLowerCase()
            .search(key.value.toLowerCase()) >= 0
        ) {
          id_rezultate.push(this.state.posts[i]._id);
          rezultate.push(this.state.posts[i].title);
        }
      }
    }
    if (rezultate.length === 0) {
      rezultate.push("Nothing was found !!!");
      key.value = "";
    }
    this.setState({ show_find: true, result: rezultate, id_rez: id_rezultate });
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
              <Search rezult={this.state.result} id_rez={this.state.id_rez} />
            ) : null}
          </div>
          <div />
        </div>
        {this.state.posts.length == 0 ? (
          <div className="footer_bottom">
            <h1>Nothing to show you</h1>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Home;
