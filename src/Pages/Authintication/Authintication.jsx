import React, { useState } from "react";
import "./Authintication.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const Authintication = () => {
    const [show, setShow] = useState("Login");
    return (
        <div className="warp">
            {show === "Login" && <Login setShow={setShow} />}
            {show !== "Login" && <SignUp setShow={setShow} />}
        </div>
    );
};

export default Authintication;
