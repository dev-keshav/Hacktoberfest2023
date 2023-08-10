import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/login",
        user
      );
      localStorage.setItem("userId", res.data.user._id);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    // <div>
    //   <form className="login-form">
    //     <div className="login-div">
    //       <h3>Login to your account</h3>
    //       <label htmlFor="email">email</label> <br />
    //       <input
    //         type="email"
    //         name="email"
    //         onChange={(e) => handleChange(e)}
    //         required
    //       />
    //       <br />
    //       <label htmlFor="password">password</label>
    //       <br />
    //       <input
    //         type="password"
    //         name="password"
    //         onChange={(e) => handleChange(e)}
    //         required
    //       />
    //       <br />
    //       <button
    //         onClick={(e) => {
    //           handleLogin(e);
    //         }}
    //       >
    //         Login
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div className="outer-div">
      <div className="login-form">
        <form>
          <div className="title">Login to your account</div>
          <div className="input-container">
            <label>Email </label>
            <input
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="input-container">
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
                handleLogin(e);
              }}
              type="submit"
            />
          </div>
          <p className="bottom-para">New to MyApp? <a href="/register">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
