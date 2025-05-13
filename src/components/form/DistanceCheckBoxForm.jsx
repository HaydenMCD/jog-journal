/**
 *
 * @file DistanceCheckBoxForm.js
 * @typedef {Object} DistanceCheckBoxProps
 * @property {boolean} kilometersOn - true kilometers is selected, false miles is selected
 * @property {function} setKilometersOn - function to set kilometersOn
 * @property {('Kilometers' | 'Miles')} distanceType - type of distance | Kilometers or Miles
 */

/**
 * 
 * @param {DistanceCheckBoxProps} props - props for the component
 * @description A checkbox to select between kilometers and miles
 * @returns {JSX.Element}
 */

function DistanceCheckBox({ kilometersOn, setKilometersOn, distanceType }) {
  return (
    <form>
      <label htmlFor={distanceType}>{distanceType}</label>
      <input
        type={'checkbox'}
        defaultChecked={kilometersOn}
        name={'distanceType'}
        onChange={(e) => {
          setKilometersOn(e.target.checked);
        }}
        id={kilometersOn ? 'kilometers' : 'miles'}
        value={kilometersOn}
      />
    </form>
  );
}

export default DistanceCheckBox;
