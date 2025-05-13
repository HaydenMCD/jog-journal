/**
 *
 * @file DistanceCheckBoxForm.js
 * @typedef {Object} DistanceCheckBoxProps
 * @property {function} setKilometersOn - function to set kilometersOn
 * @property {('Kilometers' | 'Miles')} distanceType - type of distance | Kilometers or Miles
 */

import { DISTANCE_TYPES } from "../../utils/constants";

/**
 * 
 * @param {DistanceCheckBoxProps} props - props for the component
 * @description A checkbox to select between kilometers and miles
 * @returns {JSX.Element}
 */

function DistanceRadioButtonForm({ setKilometersOn, distanceType }) {
  return (
    <form>
      <label htmlFor={distanceType}>{distanceType}</label>
      <input
        type='radio'
        name='distanceType'
        id={DISTANCE_TYPES.KILOMETERS.NAME}
        defaultChecked={distanceType === DISTANCE_TYPES.KILOMETERS.NAME}
        onChange={(e) => {
          setKilometersOn(e.target.checked);
        }}
      />
      <input
        type='radio'
        name='distanceType'
        id={ DISTANCE_TYPES.MILES.NAME }
        defaultChecked={distanceType === DISTANCE_TYPES.MILES.NAME}
        onChange={(e) => {
          setKilometersOn(e.target.checked);
        }}
      />
    </form>
  );
}

export default DistanceRadioButtonForm;
