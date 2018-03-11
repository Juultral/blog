import React from "react";
import "../CSS/detail_post.css";
import "../CSS/bootstrap.css";
import "../CSS/post.css";
const DetailPost = (props) => (
  <div id="detail_post" className="detail_post">
  {window.scrollTo(0, 0)}
  <div className="post_title">
    <h2 className="titlu">{props.match.params.id}</h2>
    <a href="/" className="edit btn btn-danger" onClick={()=>del(props)}>Delete</a>
    </div>
      <br/>
      <div className="image_div">
        <img alt="img" src="https://picsum.photos/500/500/?random"/>
      </div><br/>
      <div className="post_title">
      <label>{localStorage.getItem(props.match.params.id)}</label>
      </div>
  </div>
);
function del(props){
	localStorage.removeItem(props.match.params.id)
}
export default DetailPost;
