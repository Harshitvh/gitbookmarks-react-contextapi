import React, { useContext } from "react";
import BookMarkContext from "./../../context/BookMarks/BookMarkContext";

import "./RepoItem.css";

const RepoItem = (props) => {
  const bookMarkContext = useContext(BookMarkContext);
  return (
    <div style={{ maxHeight: "400px" }} className="card col s3">
      <div className="card-image ">
        <img src={props.item.owner.avatar_url} />
      </div>
      <div className="card-content">
        <p>{props.item.name}</p>
      </div>
      <div className="card-action">
        <a className="rpo_a" href={props.item.owner.html_url}>
          {"  "}More Info
        </a>
        <a onClick={() => bookMarkContext.addBookMarks(props.item)} href="#!">
          <i className="material-icons bookicon">bookmark</i>
        </a>
      </div>
    </div>
  );
};

export default RepoItem;
