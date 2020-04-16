import React, { useReducer } from "react";
import BookMarkReducer from "./BookMarkReducer";
import BookMarkContext from "./BookMarkContext";
import { GET_BOOKMARKS, ADD_BOOKMARK, REMOVE_BOOKMARK } from "./../Types";

const BookMarkState = (props) => {
  const initialState = {
    bookmarks: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(BookMarkReducer, initialState);
  const getBookMarks = async () => {
    try {
      const res = await fetch("http://localhost:8070/git/bookmarks", {
        headers: {
          name: localStorage.getItem("name"),
          password: localStorage.getItem("password"),
        },
      });
      console.log(res);
      let act = [];
      if (res.status == 200) {
        act = await res.json();
      }
      dispatch({
        type: GET_BOOKMARKS,
        payload: act,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const addBookMarks = async (repo) => {
    try {
      const res = await fetch("http://localhost:8070/git/add", {
        method: "POST",
        body: JSON.stringify(repo),

        headers: {
          "Content-Type": "application/json",
          name: localStorage.getItem("name"),
          password: localStorage.getItem("password"),
        },
      });
      state.bookmarks.push(repo);
      dispatch({
        type: ADD_BOOKMARK,
        payload: state.bookmarks,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const removeBookMarks = async (id) => {
    try {
      await fetch(`http://localhost:8070/git/delete?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          name: localStorage.getItem("name"),
          password: localStorage.getItem("password"),
        },
      });
      dispatch({
        type: REMOVE_BOOKMARK,
        payload: id,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <BookMarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        loading: state.loading,
        addBookMarks,
        removeBookMarks,
        getBookMarks,
      }}
    >
      {props.children}
    </BookMarkContext.Provider>
  );
};
export default BookMarkState;
