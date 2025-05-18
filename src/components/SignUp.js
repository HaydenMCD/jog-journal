import "../css/SignUp.css";

// For use later when implementing auth
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
          type="email"
          className="email-input"
          name="email-input"
          placeholder="Email"
          required
        ></input>
        <input
          type="password"
          className="password-input"
          name="password-input"
          placeholder="Password"
          required
        ></input>
        <div className="sub-title">About you:</div>
        <input
          type="text"
          className="name-input"
          name="name-input"
          placeholder="Name"
          required
        ></input>
        <input type="date" className="dob-input" name="dob-input" required />
        <input
          type="number"
          className="weight-input"
          name="weight-input"
          placeholder="Weight in kg"
          required
        />
        <input
          type="submit"
          className="submit-btn"
          name="submit-btn"
          onClick={sendUserData}
        ></input>
      </div>
    </form>
  );
};

export default SignUp;
