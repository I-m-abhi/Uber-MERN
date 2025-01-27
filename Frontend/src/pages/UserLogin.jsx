import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      email: userData.email,
      password: userData.password,
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, user);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/start");
    }

    setUserData({
      email: "",
      password: "",
    })
  }

  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <img
          className="w-16 ml-6 my-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
        <form
          className="px-6"
          onSubmit={(e) => { submitHandler(e) }}
        >
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
            name="email"
            value={userData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            placeholder='password'
            name="password"
            value={userData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
        </form>
        <p
          className='text-center'>New here?
          <Link
            to='/signup'
            className='text-blue-600'>
            Create new Account
          </Link>
        </p>
      </div>
      <div className="px-6">
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex justify-center text-white font-semibold mb-5 rounded-lg py-2 w-full text-lg '
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
};

export default UserLogin;
