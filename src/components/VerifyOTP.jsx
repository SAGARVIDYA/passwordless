import { useState } from 'react';
import axios from 'axios';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');

  const verifyOTP = async () => {
    try {
      const email = localStorage.getItem('email');

      const res = await axios.post(
        'http://localhost:3000/api/auth/verify-otp',
        {
          email,
          otp,
        }
      );

      localStorage.setItem('token', res.data.token);

      alert('Login Successful');

      window.location.href = '/dashboard';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-slate-900'>
      <div className='bg-slate-800 p-10 rounded-2xl w-[90%] md:w-[400px] shadow-2xl'>
        <h1 className='text-white text-3xl font-bold text-center mb-6'>
          Verify OTP
        </h1>

      <input
  type='text'
  placeholder='Enter OTP'
  className='w-full p-3 rounded-lg mb-4 outline-none bg-slate-700 text-white placeholder-gray-400'
  onChange={(e) => setOtp(e.target.value)}
/>

        <button
          onClick={verifyOTP}
          className='w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg'
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;