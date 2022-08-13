import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const Dashboard = () => {
  const [car, setCar] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setCar(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res.status);
        if (res.status === 204) {
          toggleModal();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>Data User</h1>
      {!!car.length &&
        car.map((user) => (
          <div>
            <p>{user.first_name}</p>
            <img src={user.avatar} alt="" />
            <div>
              <Link to={`/edit-car/${user.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={toggleModal}>Delete</button>
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
              >
                <div className="auth">
                  <h2>Yakin menghapus data?</h2>
                  <button onClick={() => handleDelete(user.id)}>Ya</button>
                  <button onClick={toggleModal}>Tidak</button>
                </div>
              </Modal>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
