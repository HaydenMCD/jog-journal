import '../css/auth.css';

// For use later when implementing auth
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const sendUserData = () => {
  window.location.reload();
};

const SignUp = () => {
  return (
    <form>
      <div className='auth-container'>
        <div className='auth-title'>Sign Up</div>
        <div className='auth-sub-title'>login details:</div>
        <input
          type='email'
          className='auth-input'
          name='email-input'
          placeholder='Email'
          required
        />
        <input
          type='password'
          className='auth-input'
          name='password-input'
          placeholder='Password'
          required
        />
        <div className='sub-title'>About you:</div>
        <input
          type='text'
          className='auth-input'
          name='name-input'
          placeholder='Name'
          required
        />
        <input type='date' className='auth-input' name='dob-input' required />
        <input
          type='number'
          className='auth-input'
          name='weight-input'
          placeholder='Weight in kg'
          required
        />
        <input
          type='submit'
          className='auth-submit-btn'
          onClick={sendUserData}
        />
      </div>
    </form>
  );
};

export default SignUp;
