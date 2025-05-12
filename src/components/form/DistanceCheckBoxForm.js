/**
 *
 * @param {boolean} kilometersOn - true kilometers is selected, false miles is selected
 * @param {function} setKilometersOn - function to set kilometersOn
 * @param {('Kilometers' | 'Miles')} distanceType - type of distance | Kilometers or Miles
 * @returns {JSX.Element} - DistanceCheckBoxForm component
 */

function DistanceCheckBox(kilometersOn, setKilometersOn, distanceType) {
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
