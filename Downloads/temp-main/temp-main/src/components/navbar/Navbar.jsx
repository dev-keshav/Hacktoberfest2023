import React, { useContext, useEffect } from 'react'
import "./navbar.css"
import AuthContext from '../../context/auth/AuthContext'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const a= useContext(AuthContext)
    console.log(a)
  

    const handleLogout = ()=>{
        localStorage.removeItem("username");
        navigate("/login");
        
    }
    
  return (
    <div className='nav'>
      <h1 className="logo">RP</h1>
      <div className="nav-part2">
        <h3>Plans</h3>
        <h3 className='logout' onClick={handleLogout}>Logout</h3>
      </div>
    </div>
  )
}

export default Navbar
