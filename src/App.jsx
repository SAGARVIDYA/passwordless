import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import VerifyOTP from './components/VerifyOTP';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/verify' element={<VerifyOTP />} />

        <Route
          path='/dashboard'
          element={
            localStorage.getItem('token') ? (
              <Dashboard />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;