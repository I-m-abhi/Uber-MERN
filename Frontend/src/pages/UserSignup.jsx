import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
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
    const newUser = {
      fullname: {
        firstname: userData.firstname,
        lastname: userData.lastname,
      },
      email: userData.email,
      password: userData.password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/start");
    }

    setUserData({
      firstname: "",
      lastname: "",
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
          onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="text"
            placeholder='First name'
            name='firstname'
            value={userData.firstname}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="text"
            placeholder='Last name'
            name='lastname'
            value={userData.lastname}
            onChange={(e) => handleInputChange(e)}
          />
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
            name='email'
            value={userData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            required type="password"
            placeholder='password'
            name='password'
            value={userData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg py-2 w-full text-lg placeholder:text-base'
          >Signup</button>
        </form>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
    </div>
  )
};

export default UserSignup;
