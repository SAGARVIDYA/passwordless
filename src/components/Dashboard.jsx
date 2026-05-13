const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    window.location.href = '/';
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-950 flex justify-center items-center'>
      <div className='bg-slate-800/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[90%] md:w-[500px] text-center border border-slate-700'>
        
        <h1 className='text-4xl font-bold text-white mb-4'>
          Welcome to Dashboard 🔥
        </h1>

        <p className='text-slate-300 mb-8'>
          You have successfully logged in using Passwordless Authentication.
        </p>

        <button
          onClick={logout}
          className='bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold w-full'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;