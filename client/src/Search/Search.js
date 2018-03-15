import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.css";
import "./search.css";

const Search = props => (
  <div className="search">
    <hr />
    {props.rezult.map(
      (rez, i) =>
        rez !== "Nothing was found !!!" ? (
          <li>
            <Link to={`/posts/${props.id_rez[i]}`}>{rez}</Link>
          </li>
        ) : (
          "Nothing was found !!!"
        )
    )}
  </div>
);
export default Search;
