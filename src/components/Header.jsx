import '../css/Header.css';

import useDistanceValues from '../hooks/useDistanceValues';
import DistanceRadioButtonForm from './form/DistanceRadioButtonForm';
import { Link } from '@tanstack/react-router';

const AuthHeader = () => {
  const { distanceType, toggleKilometers } = useDistanceValues();
  return (
    <div>
      <DistanceRadioButtonForm
        distanceType={distanceType}
        setKilometersOn={toggleKilometers}
      />
    </div>
  );
};

const BaseHeader = ({ children }) => {
  const appName = `${import.meta.env.VITE_APP_NAME}`;
  return (
    <header className='header-wrapper'>
      <div>
        <Link to='/'>
          <h1 className='title'>{appName}</h1>
        </Link>
        <h2 className='slogan'>
          Your companion for tracking every step towards your yearly goal.
        </h2>
      </div>
      {children}
    </header>
  );
};

const Header = () => {
  // const localMode = import.meta.env.MODE;
  let isAuth;
  if (import.meta.env.MODE === 'development') {
    isAuth = import.meta.env.VITE_USER_SIGNED_IN;
  } else {
    console.log('get auth from firebase');
  }

  return <BaseHeader>{isAuth && <AuthHeader />}</BaseHeader>;
};

export default Header;
