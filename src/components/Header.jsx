import useDistanceValues from '../hooks/useDistanceValues';
import DistanceRadioButtonForm from './form/DistanceRadioButtonForm';
import '../css/Header.css';
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
  return (
    <header className='header-wrapper'>
      <div>
        <Link to='/'>
          <h1 className='title'>Home Jog Journal</h1>
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
  const isAuth = true;
  return <BaseHeader>{isAuth && <AuthHeader />}</BaseHeader>;
};

export default Header;
