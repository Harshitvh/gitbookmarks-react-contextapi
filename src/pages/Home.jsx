import React, { useContext } from "react";
import Navbar from "./../components/layouts/Navbar";
import Repos from "./../components/Repos/Repos";
import BookMarks from "./../components/Bookmarks/BookMarks";
import AuthContext from "./../context/Auth/AuthContext";
const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Navbar></Navbar>

      <div className="row">
        <div className="col s7">
          <Repos></Repos>
        </div>
        <div className="col s5">
          <BookMarks style={{ positon: "relative" }} />
        </div>
      </div>
      <a
        onClick={() => authContext.logout()}
        href="/logout"
        style={{
          left: "92%",
          bottom: "1%",
          position: "sticky",
        }}
        className="btn-floating  btn-large waves-effect waves-light  grey darken-3"
      >
        <i className="material-icons">logout</i>
      </a>
    </div>
  );
};

export default Home;
