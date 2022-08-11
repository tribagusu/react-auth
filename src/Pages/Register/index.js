import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        setReg(res.data.token);
        console.log(res);
      })
      .then(() => {
        setIsLoading(false);
        alert(`Anda sudah terdaftar dengan token ${reg}`);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="create">
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
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
          <button>Register</button>
        ) : (
          <button disabled>Registering...</button>
        )}
      </form>
    </div>
  );
};

export default Register;
