import '../css/auth.css';

const sendLoginData = () => {
  window.location.reload();
};

const Login = () => {
  return (
    <form>
      <div className='auth-container'>
        <div className='auth-title'>Login</div>
        <input
          type='email'
          className='auth-input'
          name='email'
          placeholder='Email'
          required
        />
        <input
          type='password'
          className='auth-input'
          name='password'
          placeholder='Password'
          required
        />
        <input
          type='submit'
          className='auth-submit-btn'
          onClick={sendLoginData}
          value='Login'
        />
      </div>
    </form>
  );
};

export default Login;
