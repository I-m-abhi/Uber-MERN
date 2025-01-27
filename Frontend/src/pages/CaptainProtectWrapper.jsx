import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      setCaptain(response.data.captain);
      setIsLoading(false);
      // if (captain === null) {
        // navigate("/captain-login");
        // console.log(captain)
      // }
    }
  }).catch((err) => {
    console.log(err);
    localStorage.removeItem("token");
    // console.log("run cap")
    navigate("/captain-login");
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

export default CaptainProtectWrapper;