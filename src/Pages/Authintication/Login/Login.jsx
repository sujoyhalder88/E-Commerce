import React, { useState } from "react";
import "./Login.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Login = ({ setShow }) => {
  const [user, setUser] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefult();
  };
  const checkHandle = () => {
    setChecked(!checked);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        <h1> LogIn</h1>
        <div className="input_email">
          <EmailIcon />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={user}
            onChange={handleUser}
          />
        </div>
        <div className="input_password">
          <LockIcon />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={userPassword}
            onChange={handlePassword}
          />
        </div>
        <span>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={checked}
            onChange={checkHandle}
          />
          By continuing, you agree to e-commerce's
          <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>
        </span>
        <div className="btn">
          {checked ? <button className="btn_btn"> Login </button> : false}
        </div>
        <h5>
          You'r new customer?
          <button
            onClick={() => {
              setShow("SignUp");
            }}
          >
            SignUp
          </button>
          -here
        </h5>
        <h3 className="h3">or Login using media </h3>
        <a href="/">
          <FacebookIcon className="face" />
          <TwitterIcon className="twitter" />
          <GoogleIcon className="gmail" />
        </a>
      </div>
    </form>
  );
};

export default Login;
