import axios from "axios";

export function fetchPosts() {
  return dispatch => {
    axios
      .get("/api/posts")
      .then(response => {
        dispatch({ type: "FETCH_ALL_POSTS", payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function fullPost(id) {
  return dispatch => {
    axios
      .get(`/api/posts/${id}`)
      .then(response => {
        dispatch({ type: "FETCH_SINGLE_POST", payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
