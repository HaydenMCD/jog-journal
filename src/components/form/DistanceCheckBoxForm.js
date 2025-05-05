/**
 * 
 * @param {boolean} kilometersOn - true kilometers is selected, false miles is selected 
 */

export const DistanceCheckBox = (kilometersOn) => {
  return (
    <form>
      <label htmlFor={kilometersOn ? 'kilometers' : 'miles'}>
        {kilometersOn ? 'Kilometers' : 'Miles'}
      </label>
      <input
        type={'checkbox'}
        defaultChecked={kilometersOn}
        id={kilometersOn ? 'kilometers' : 'miles'}
        value={kilometersOn}
      />
    </form>
  );
};
