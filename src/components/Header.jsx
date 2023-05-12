import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogged, logoutUser } from "../features/users.slice";

const Header = () => {
  let isConnected = useSelector((state) => state.user.auth.isLoggedIn);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={require("../assets/img/argentBankLogo.png")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isConnected ? (
          <div>
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <span className="main-nav-user">{firstName}</span>
            <NavLink
              className="main-nav-item"
              onClick={() => {
                localStorage.clear();
                dispatch(logoutUser());
              }}
              to="/"
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              <span className="sign-out">Sign Out</span>
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
