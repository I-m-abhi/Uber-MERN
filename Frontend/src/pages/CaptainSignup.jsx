import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainSignup = () => {
  const [captainData, setCaptainData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    color: "",
    plate: "",
    capacity: "",
    vehicleType: "",
  });

  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaptainData((prev) => ({ ...prev, [name]: value }));
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainRegisterData = {
      fullname: {
        firstname: captainData.firstname,
        lastname: captainData.lastname,
      },
      email: captainData.email,
      password: captainData.password,
      vehicle: {
        color: captainData.color,
        plate: captainData.plate,
        capacity: captainData.capacity,
        vehicleType: captainData.vehicleType,
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainRegisterData);

    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
   
    setCaptainData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
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
          onSubmit={(e) => submitHandler(e)}
        >
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-2'>
            <input
              required
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              placeholder='First name'
              name='firstname'
              value={captainData.firstname}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type="text"
              placeholder='Last name'
              name='lastname'
              value={captainData.lastname}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
            name='email'
            value={captainData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            required type="password"
            placeholder='password'
            name='password'
            value={captainData.password}
            onChange={(e) => handleInputChange(e)}
          />
          <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
          <div className='grid grid-cols-2 gap-2'>
            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              type='text'
              placeholder='Vehicle color'
              name='color'
              value={captainData.color}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              type='text'
              placeholder='Vehicle plate'
              name='plate'
              value={captainData.plate}
              onChange={(e) => handleInputChange(e)}
            />
            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              type='number'
              placeholder='Vehicle capacity'
              name='capacity'
              value={captainData.capacity}
              onChange={(e) => handleInputChange(e)}
            />
            <select
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              name='vehicleType'
              value={captainData.vehicleType}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg py-2 w-full text-lg placeholder:text-base'
          >Signup</button>
        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
    </div>
  )
};

export default CaptainSignup;