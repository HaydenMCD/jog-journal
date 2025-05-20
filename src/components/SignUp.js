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
          className="form-input"
          name="email-input"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="form-input"
          name="password-input"
          placeholder="Password"
          required
        />
        <div className="sub-title">About you:</div>
        <input
          type="text"
          className="form-input"
          name="name-input"
          placeholder="Name"
          required
        />
        <input type="date" className="form-input" name="dob-input" required />
        <input
          type="number"
          className="form-input"
          name="weight-input"
          placeholder="Weight in kg"
          required
        />
        <input type="submit" className="submit-btn" onClick={sendUserData} />
      </div>
    </form>
  );
};

export default SignUp;
