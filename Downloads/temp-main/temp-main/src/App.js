import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home';
import "./App.css"
import Plans from './Pages/plans/Plans';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import AuthState from './context/auth/AuthState';
import AuthContext from './context/auth/AuthContext';
const App = () => {
  const a = useContext(AuthContext);
  console.log(a)
  return (
    // <AuthState>
      <BrowserRouter>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/premium' element={<Plans />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </>
      </BrowserRouter>
    // </AuthState>
  )
}

export default App
