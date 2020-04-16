import React, { useState, useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Repos from "./components/Repos/Repos";
import RepoState from "./context/Repository/RepoState";
import BookMarks from "./components/Bookmarks/BookMarks";
import BookMarkState from "./context/BookMarks/BookMarkState";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthState from "./context/Auth/AuthState";
import AuthContext from "./context/Auth/AuthContext";
import LogOut from "./pages/LogOutPage";
import LogOutPage from "./pages/LogOutPage";
function App() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <RepoState>
        <BookMarkState>
          <AuthState>
            <Switch>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/logout" component={LogOutPage}></Route>
              <Route
                render={() => (
                  <div>
                    <h3>Page Not Found</h3>
                  </div>
                )}
              />
            </Switch>
          </AuthState>
        </BookMarkState>
      </RepoState>
    </BrowserRouter>
  );
}

export default App;
