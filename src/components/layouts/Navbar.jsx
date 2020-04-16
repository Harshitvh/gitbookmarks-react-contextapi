import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <Search className="col s6"></Search>
      </div>
    </nav>
  );
};

export default Navbar;
