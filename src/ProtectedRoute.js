import React from "react";
import { Navigate } from "react-router-dom";

// const useAuth = () => {
//   const isLogin = { token: false };
//   return isLogin && isLogin.token;
// };

const ProtectedRoute = ({ isLoggedIn, children }) => {
  // const navigate = useNavigate();
  // const isAuth = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
