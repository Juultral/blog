import React from "react";
import "./not_found.css";
const NotFound = () => (
  <div className="error-container">
    <h1>404</h1>
    <h2>Page not found</h2>
    <h2>
      Take me back to <a href="/">Home</a>
    </h2>
  </div>
);
export default NotFound;
