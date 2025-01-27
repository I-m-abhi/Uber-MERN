import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { user, setUser } = useContext(UserDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      setUser(response.data.user);
      setIsLoading(false);
      // if (user === null) {
        // navigate("/login");
        // console.log(user)
      // }
    }
  }).catch((err) => {
    console.log(err);
    localStorage.removeItem("token");
    navigate("/login");
  })

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
};

export default UserProtectWrapper;
