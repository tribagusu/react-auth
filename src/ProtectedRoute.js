import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const useAuth = () => {
  const user = { token: false };
  return user && user.token;
};

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : navigate("/login");
};

export default ProtectedRoute;
