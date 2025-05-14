import { useState } from "react";
import "../css/SignUp.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const sendUserData = () => {
  window.location.reload();
};

const SignUp = () => {
  return (
    <form>
      <div className="login-container">
        <div className="title">Sign Up</div>
        <div className="sub-title">login details:</div>
        <input
          className="email-input"
          type="email"
          placeholder="Email"
          required
        ></input>
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          required
        ></input>
        <div className="sub-title">About you:</div>
        <input className="name-input" type="text" placeholder="Name"></input>
        <input className="dob-input" type="date" />
        <input className="kg-input" type="number" placeholder="Weight in kg" />
        <input className="submit" type="submit" onClick={sendUserData}></input>
      </div>
    </form>
  );
};

export default SignUp;
