import React from "react";
import { Link } from "react-router-dom";
import "../CSS/bootstrap.css";
import "../CSS/search.css";

const Search = props => (
  <div className="search">
    <hr />
    {console.log(props)}
    {props.rezult.map(
      rez =>
        rez !== "Nothing was found !!!" ? (
          <li>
            <Link to={`/posts/${rez.split(" ").join("_")}`}>{rez}</Link>
          </li>
        ) : (
          "Nothing was found !!!"
        )
    )}
  </div>
);
export default Search;
