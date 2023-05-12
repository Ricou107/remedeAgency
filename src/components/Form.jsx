import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogged, loginUser } from "../features/users.slice";
import {
  runLogOutTimer,
  saveEmailInLocalStorage,
  saveTokenInLocalStorage,
} from "../services/AuthService";

const Form = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInput = useRef();
  const passwordInput = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const headers = { "Content-Type": "application/json" };

    const data = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    axios
      .post("http://localhost:3001/api/v1/user/login", data, {
        headers: headers,
      })

      .then((res) => {
        saveTokenInLocalStorage(res.data.body.token);
        saveEmailInLocalStorage(data.email);
        runLogOutTimer(dispatch);
        dispatch(loginUser([res.data.body.token, data.email]));
        dispatch(isLogged([true]));
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <div className="input-wrapper">
        <label>Email</label>
        <input type="text" id="username" ref={emailInput} />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input type="password" id="password" ref={passwordInput} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label>Remember me</label>
      </div>

      <input
        type="submit"
        className={"sign-in-button submit-btn-login"}
        value="Sign-in"
      />
    </form>
  );
};

export default Form;
