import React, { useState } from 'react'
import axios from "axios"
const Register = () => {
    const [info, setInfo] = useState({
        username:"",
        email:"",
        password:""
    })
    
    const handleChange = (e)=>{
         const {name , value} = e.target;

         setInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            
            const res = await axios.post("http://localhost:4000/api/user/register",info) ;
            const {user} = res.data;
            localStorage.setItem('userId', user._id);
        } catch (error) {
            console.log(error.message)
        }
        


    }

    

  return (
    // <div>
    //     <form>
    //         <label htmlFor="username">username</label>
    //         <input type="text" name="username" onChange={(e)=>handleChange(e)}  required/>
    //         <label htmlFor="email">email</label>
    //         <input type="email" name='email' onChange={(e)=>handleChange(e)}  required/>
    //         <label htmlFor="password">password</label>
    //         <input type="password" name='password' onChange={(e)=>handleChange(e)} required />
    //         <button onClick={(e)=>{handleSubmit(e)}}>Register</button>
    //     </form>
    // </div>



<div className="outer-div">
<div className="login-form">
  <form>
    <div className="title">Register your account</div>
    <div className='reg-input-container'><label htmlFor="username">username</label>
    <input type="text" name="username" onChange={(e)=>handleChange(e)}  required/></div>
    <div className="reg-input-container">
      <label>Email </label>
      <input
        type="email"
        name="email"
        onChange={(e) => handleChange(e)}
        required
      />
    </div>
    <div className="reg-input-container">
      <label>Password </label>
      <input
        type="password"
        name="password"
        onChange={(e) => handleChange(e)}
        required
      />
    </div>
    <div className="check-box"><input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label></div>
    <div className="button-container">
      <input
        onClick={(e) => {
            handleSubmit(e);
        }}
        type="submit"
      />
    </div>
    <p className="bottom-para">New to MyApp? <a href="/login">Sign In</a></p>
  </form>
</div>
</div>
  )
}

export default Register
