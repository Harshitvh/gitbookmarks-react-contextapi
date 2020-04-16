import React, { useState, useContext } from "react";
import AuthContext from "./../context/Auth/AuthContext";
import { useEffect } from "react";
const Login = (props) => {
  const [loginClick, setLoginClick] = useState(false);
  const [registerClick, setRegisterClick] = useState(false);

  const authContext = useContext(AuthContext);
  useEffect(() => {
    const user = {
      name: localStorage.getItem("name"),
      password: localStorage.getItem("password"),
    };
    authContext.login(user);
    if (authContext.isAuth) props.history.push("/home");
  }, [authContext.isAuth]);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const onLoginChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onRegisterChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = () => {
    setLoginClick(true);
    authContext.login(login);
  };

  const onRegister = () => {
    setRegisterClick(true);
    authContext.register(register);
  };

  return (
    <div className="row container">
      <div style={{ position: "relative", top: "30px" }} className="col s6">
      <div>
          {null !== authContext.alert && registerClick  ? (
            <h3 style={{ fontSize: "1.5rem" }}>User Already Exists</h3>
          ) : (
            ""
          )}
        </div>
        <h3 style={{ fontSize: "1.5rem" }}>Please Register</h3>

        <form>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onRegisterChange}
                id="name"
                value={register.name}
                name="name"
                type="text"
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onRegisterChange}
                id="email"
                value={register.email}
                name="email"
                type="email"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                value={register.password}
                onChange={onRegisterChange}
                id="password1"
                name="password"
                type="password"
              />
              <label htmlFor="password1">Password</label>
            </div>
          </div>
          <button
            onClick={onRegister}
            className="btn waves-effect waves-light"
            type="button"
            name="action"
          >
            Register
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      <div style={{ position: "relative", top: "30px" }} className="col s6">
        <div>
          {null !== authContext.alert && loginClick ? (
            <h3 style={{ fontSize: "1.5rem" }}>Invalid Credentials</h3>
          ) : (
            ""
          )}
        </div>
        <h3 style={{ fontSize: "1.5rem" }}>Already Existing Account</h3>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="login"
                value={login.name}
                name="name"
                onChange={onLoginChange}
                type="text"
              />
              <label htmlFor="login">Login</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                name="password"
                value={login.password}
                onChange={onLoginChange}
                type="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button
            onClick={onLogin}
            className="btn waves-effect waves-light"
            type="button"
            name="action"
          >
            Login
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
