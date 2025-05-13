import { useDistanceValues } from '../hooks/useDistance';
import DistanceCheckBox from './form/DistanceCheckBoxForm';
import '../css/Header.css';

const Header = () => {
  const { kilometersOn, setKilometersOn, distanceType } = useDistanceValues();
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
        setKilometersOn={setKilometersOn}
        kilometersOn={kilometersOn}
      />
    </header>
  );
};

export default Header;
