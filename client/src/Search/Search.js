import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../bootstrap.css";
import "./search.css";

const Search = props => (
  <div className="search">
    <hr />
    {props.rezult.map(
      (rez, i) =>
        rez !== "Nothing was found !!!" ? (
          <li key={i}>
            <Link to={`/posts/${props.id_rez[i]}`}>{rez}</Link>
          </li>
        ) : (
          "Nothing was found !!!"
        )
    )}
  </div>
);
Search.propTypes = {
  rezult: PropTypes.array
};
export default Search;
