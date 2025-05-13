import useDistanceValues from '../hooks/useDistanceValues';
import DistanceCheckBox from './form/DistanceRadioButtonForm';
import '../css/Header.css';

const Header = () => {
  const { distanceType, toggleKilometers } = useDistanceValues();
  return (
    <header className='header-wrapper'>
      <div>
        <h1 className='title'>Jog Journal</h1>
        <h2 className='slogan'>
          Your companion for tracking every step towards your yearly goal.
        </h2>
      </div>
      <DistanceCheckBox
        distanceType={distanceType}
        setKilometersOn={toggleKilometers}
      />
    </header>
  );
};

export default Header;
