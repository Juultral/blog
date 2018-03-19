import React from "react";
import { Link } from "react-router-dom";
const NotLogIn = () => (
  <div
    style={{
      padding: "5%",
      textAlign: "center"
    }}
  >
    <h1>First log in</h1>
    <br />
    <Link className="btn btn-secondary ml-3" to="/log_in">
      Log in
    </Link>
  </div>
);
export default NotLogIn;
