import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogout = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {captain, setCaptain} = useContext(CaptainDataContext);

  axios.get(`${import.meta.env.VITE_API_URL}/captain/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response)=> {
    if(response.status === 200) {
      // setCaptain(null);
      localStorage.removeItem("token");
      navigate("/captain-login");
    }
  })

  return (
    <div>
      CaptainLogout
    </div>
  )
}

export default CaptainLogout;
