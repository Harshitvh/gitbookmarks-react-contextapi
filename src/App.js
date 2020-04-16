import React, { useState, useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RepoState from "./context/Repository/RepoState";
import BookMarkState from "./context/BookMarks/BookMarkState";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthState from "./context/Auth/AuthState";
import LogOutPage from "./pages/LogOutPage";
import PrivateRoute from './pages/PrivateRoute';
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <RepoState>
        <BookMarkState>
          <AuthState>
            <Switch>
            <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
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
