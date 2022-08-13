import React from "react";
import { Navigate } from "react-router-dom";

// const useAuth = () => {
//   const isLogin = { token: false };
//   return isLogin && isLogin.token;
// };

const ProtectedRoute = ({ user, children }) => {
  // const navigate = useNavigate();
  // const isAuth = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
