import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
