import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import { LOGIN, SET_ALERT, LOG_OUT } from "./../Types";

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuth: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    dispatch({
      type: LOG_OUT,
    });
  };
  const login = async (user) => {
    let error;
    try {
      const abc = await fetch("http://localhost:8070/git/auth", {
        headers: {
          "Content-Type": "application/json",
          name: user.name,
          password: user.password,
        },
      });
      console.log(abc.status);
      if (abc.status !== 200) {
        dispatch({
          type: SET_ALERT,
        });
      } else {
        localStorage.setItem("name", user.name);
        localStorage.setItem("password", user.password);
        dispatch({
          type: LOGIN,
          payload: user,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: SET_ALERT,
      });
    }
  };

  const register = async (user) => {
    let error;
    try {
      const abc = await fetch("http://localhost:8070/git/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(abc.status);
      if (abc.status !== 200) {
        dispatch({
          type: SET_ALERT,
        });
      } else {
        localStorage.setItem("name", user.name);
        localStorage.setItem("password", user.password);
        dispatch({
          type: LOGIN,
          payload: user,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: SET_ALERT,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuth: state.isAuth,
        alert: state.alert,
        login,
        logout,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
