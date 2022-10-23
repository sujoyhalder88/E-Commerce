import React, { useState } from "react";
import "./SignUp.css";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const SignUp = ({ setShow }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefualt();
  };

  const checkHandle = () => {
    setChecked(!checked);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="signup">
        <h1>SignUp</h1>
        <h4>Please fill in this form to create an Account</h4>
        <div className="input">
          <PersonIcon />
          <input
            type="text"
            name="text"
            id="text"
            autoComplete="off"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input_1">
          <PersonIcon />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter Last Name"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="verify_mail">
          <MailIcon />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phone">
          <PhoneIcon />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter Your Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="verify_password">
          <LockIcon />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="verify_password_1">
          <VpnKeyIcon />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Conform Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>

        <div className="check">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={checked}
            onChange={checkHandle}
          />
          I accept the <a href="/">Terms of Use</a> &{" "}
          <a href="/">Privacy Policy</a>
        </div>

        <div className="btn">
          {checked ? <button className="btn_btn_1"> Sign Up </button> : null}
        </div>
        <h5>
          You'r have already Account ?
          <button
            className="btn_btn_2"
            onClick={() => {
              setShow("Login");
            }}
          >
            LogIn
          </button>
          -here
        </h5>
      </div>
    </form>
  );
};

export default SignUp;
