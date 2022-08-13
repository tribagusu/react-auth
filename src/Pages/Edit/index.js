import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCar = () => {
  const [car, setCar] = useState({});

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

  console.log(car);

  return (
    <div className="auth">
      <h1>Edit Car</h1>
      <div>
        {Object.keys(car).length ? (
          <div>{car.first_name}</div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default EditCar;
