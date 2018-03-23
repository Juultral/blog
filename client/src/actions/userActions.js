import axios from "axios";

export function fetchUsers() {
  return dispatch => {
    axios
      .get("/api/users")
      .then(response => {
        dispatch({ type: "FETCH_ALL_USERS", payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function fullPost(id) {
  return dispatch => {
    axios
      .get(`/api/users/${id}`)
      .then(response => {
        dispatch({ type: "FETCH_SINGLE_USERS", payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
