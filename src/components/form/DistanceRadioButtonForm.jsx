import { DISTANCE_TYPES } from '../../utils/constants';
import { useLocalStorage } from '../../hooks/useLocalStorage';
/**
 *
 * @file DistanceCheckBoxForm.js
 * @typedef {Object} DistanceCheckBoxProps
 * @property {function} setKilometersOn - function to set kilometersOn
 * @property {('Kilometers' | 'Miles')} distanceType - type of distance | Kilometers or Miles
 */

/**
 *
 * @param {DistanceCheckBoxProps} props - props for the component
 * @description A checkbox to select between kilometers and miles
 * @returns {JSX.Element}
 */

function DistanceRadioButtonForm({ setKilometersOn, distanceType }) {
  const { setStorageValue } = useLocalStorage('distanceType');
  // Add a form action to submit changes to the user's preferences
  // This is a placeholder and should be replaced with actual form submission logic
  // remove the local storage hook and use the form action to submit the changes when this is implemented
  return (
    <form action={null}>
      <label htmlFor={distanceType}>{distanceType}</label>
      <input
        type='radio'
        name='distanceType'
        id={DISTANCE_TYPES.KILOMETERS.NAME}
        defaultChecked={distanceType === DISTANCE_TYPES.KILOMETERS.NAME}
        onChange={(e) => {
          setKilometersOn(e.target.checked);
          setStorageValue(DISTANCE_TYPES.KILOMETERS.NAME);
        }}
      />
      <input
        type='radio'
        name='distanceType'
        id={DISTANCE_TYPES.MILES.NAME}
        defaultChecked={distanceType === DISTANCE_TYPES.MILES.NAME}
        onChange={(e) => {
          setKilometersOn(e.target.checked);
          setStorageValue(DISTANCE_TYPES.MILES.NAME);
        }}
      />
    </form>
  );
}

export default DistanceRadioButtonForm;
