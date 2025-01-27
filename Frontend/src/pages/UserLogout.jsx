import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const UserLogout = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {user, setUser} = useContext(UserDataContext);

  axios.get(`${import.meta.env.VITE_API_URL}/user/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      setUser(null);
      localStorage.removeItem("token");
      navigate("/login");
    }
  })

  return (
    <div>

    </div>
  )
};

export default UserLogout;
