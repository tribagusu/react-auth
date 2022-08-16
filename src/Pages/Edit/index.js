import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCar = () => {
  const [car, setCar] = useState({});
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");

  const param = useParams();
  const id = param.id;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setCar(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    const payload = {
      firstName: firstName,
      secondName: secondName,
      email: email,
    };
    axios
      .put(`https://reqres.in/api/users/${id}`, payload)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="auth">
      <h1>Edit Car</h1>
      <div>
        {Object.keys(car).length ? (
          <div>
            <label>First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
            />
            <label>Second Name</label>
            <input
              onChange={(e) => setSecondName(e.target.value)}
              type="text"
              value={secondName}
            />
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
            />
            <button onClick={handleEdit}>Update</button>
            <button>Logout</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default EditCar;
