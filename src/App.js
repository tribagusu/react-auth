import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./HOC";
import EditCar from "./Pages/Edit";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(null);

  // useEffect(() => {
  //   const checkIfLogin = () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       setisLoggedIn(false);
  //     } else {
  //       setisLoggedIn(true);
  //     }
  //   };
  //   checkIfLogin();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn} />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit-car" element={<EditCar />} />
    </Routes>
  );
}

export default App;

// {/* <Route
// path="/dashboard"
// element={
//   <ProtectedRoute user={isLoggedIn}>
//     {/* children */}
//     <Dashboard />
//   </ProtectedRoute>
// }
// /> */}
