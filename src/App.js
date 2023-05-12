import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";
import { checkAutoLogin } from "./services/AuthService";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    checkAutoLogin(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
