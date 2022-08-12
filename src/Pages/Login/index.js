import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/Login", payload)
      .then((res) => {
        console.log(res.data.token);
        setLogin(res.data.token);
        setIsLoading(false);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="auth">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          required
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
        />
        {!isLoading ? (
          <button>Login</button>
        ) : (
          <button disabled>Loging...</button>
        )}
      </form>
      {!!login.length && <h3>Anda sudah login dengan token {login}</h3>}
    </div>
  );
};

export default Login;
