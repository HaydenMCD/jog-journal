import { memo } from 'react';

/**
 *
 * @param {boolean} kilometersOn - true kilometers is selected, false miles is selected
 */

const DistanceCheckBox = memo(function DistanceCheckBox(kilometersOn) {
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
});

export default DistanceCheckBox;