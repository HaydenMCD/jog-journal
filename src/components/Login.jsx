import "../css/Login.css";

const sendLoginData = () => {
  window.location.reload();
};

const Login = () => {
  return (
    <form>
      <div className="login-container">
        <div className="title">Login</div>
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
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          className="submit-btn"
          onClick={sendLoginData}
          value="Login"
        />
      </div>
    </form>
  );
};

export default Login;
