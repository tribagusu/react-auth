import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const EditCar = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  console.log(data);

  return (
    <div className="auth">
      <h1>Edit Car</h1>
    </div>
  );
};

export default EditCar;
