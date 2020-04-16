import React, { useContext } from "react";
import BookMarkContext from "./../../context/BookMarks/BookMarkContext";

const BookMarkItem = (props) => {
  const bookMarkContext = useContext(BookMarkContext);
  const bm = props.bm;
  return (
    <div style={{ position: "relative", left: "5%" }} className="card col s9">
      <div className="card-image ">
        <img src={bm.owner.avatar_url} />
      </div>
      <div className="card-content">
        <p>{bm.name}</p>
      </div>
      <div className="card-action">
        <a href={bm.owner.html_url}>{"  "}More Info</a>
        <a onClick={() => bookMarkContext.removeBookMarks(bm.id)} href="#!">
          <i className="material-icons bookicon">delete</i>
        </a>
      </div>
    </div>
  );
};

export default BookMarkItem;
