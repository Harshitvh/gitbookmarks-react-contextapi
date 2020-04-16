import React, { useEffect, useContext } from "react";
import BookMarkItem from "./BookMarkItem";
import BookMarksContext from "./../../context/BookMarks/BookMarkContext";
import "./BookMarks.css";

const BookMarks = () => {
  const bookMarksContext = useContext(BookMarksContext);
  const bookmarks = bookMarksContext.bookmarks;
  useEffect(() => {
    bookMarksContext.getBookMarks();
  }, []);
  if (bookmarks !== null && bookmarks.length > 0) {
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            position: "relative",
            right: "10%",
          }}
        >
          Book Marks
        </h3>
        {bookmarks.map((bm) => (
          <BookMarkItem key={bm.id} bm={bm}></BookMarkItem>
        ))}
      </div>
    );
  } else if (bookMarksContext.loading)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  else
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Add BookMarks!</h3>
      </div>
    );
};

export default BookMarks;
