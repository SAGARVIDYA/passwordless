import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');

  const sendOTP = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/send-otp',
        { email }
      );

      alert(res.data.message);

      localStorage.setItem('email', email);

      window.location.href = '/verify';
    } catch (error) {
      alert(
        error?.response?.data?.message || 'Server Error'
      );
    }
  };

  return (
    <div className='min-h-screen bg-slate-900 flex justify-center items-center'>
      <div className='bg-slate-800 p-10 rounded-2xl shadow-2xl w-[90%] md:w-[400px]'>

        <h1 className='text-white text-3xl font-bold text-center mb-6'>
          Login Account
        </h1>

        <input
          type='email'
          placeholder='Enter Email'
          className='w-full p-3 rounded-lg mb-4 outline-none bg-slate-700 text-white placeholder-gray-400'
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendOTP}
          className='w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white p-3 rounded-lg font-semibold'
        >
          Send OTP
        </button>

      </div>
    </div>
  );
};

export default Login;