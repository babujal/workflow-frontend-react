import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SingUp';
import SignIn from './components/SignIn';
import { getUser } from './services/authService';
import NavBar from './components/Navbar';
import Jobs from './components/Jobs';


function App() {
  const [token, setToken] = useState(getUser())

  useEffect(() => {
    console.log('Token found:', token)
  }, [token]);

  return (
    <>
      <NavBar token={token} setToken={setToken}  />
      <Routes>
        <Route
          path='/'
          element={token ?  <Jobs />: <h1>Sign in or Sign up</h1>}
        />
        <Route path='signup' element={<SignUp setToken={setToken} />} />
        <Route path='signin' element={<SignIn setToken={setToken} />} />
      </Routes>
    </>
  )
}

export default App
