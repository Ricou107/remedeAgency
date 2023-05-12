import React from "react";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile";

const ProtectedRoutes = () => {
  const useAuth = () => {
    let isConnected = localStorage.getItem("token");
    const user = { loggedIn: isConnected };
    return user && user.loggedIn;
  };

  const isAuth = useAuth();

  return isAuth ? <Profile /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
