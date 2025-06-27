import '../css/KilometerInput.css';

import { useState } from 'react';

import { firestore } from '../firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

import { THIS_YEAR, NUMBER_INPUT_FIXED_DECIMAL } from '../utils/constants';

const KilometerInput = () => {
  const [kmCount, setKmCount] = useState(
    (0).toFixed(NUMBER_INPUT_FIXED_DECIMAL)
  );

  const increase = () =>
    setKmCount((+kmCount + 1).toFixed(NUMBER_INPUT_FIXED_DECIMAL));
  const decrease = () =>
    setKmCount((+kmCount - 1).toFixed(NUMBER_INPUT_FIXED_DECIMAL));

  const collectionRef = collection(firestore, `${THIS_YEAR} runs`); // Creates collection if one doesnt exist

  const handleSubmit = async (e) => {
    // this needs to be made a server action
    e.preventDefault(); // Prevents page from refreshing when submitting the form
    try {
      // Quick fix for negative or 0 kilometers being entered.
      if (kmCount <= 0) {
        alert('Cannot add 0 or negative number');
      } else {
        addDoc(collectionRef, { Kilometers: kmCount, date: Timestamp.now() }); // Adds kilometers ran and date to collection.
        console.log('Run successfuly added');
      }
    } catch (e) {
      console.log('Error adding run: ', e);
    }
    setKmCount((0).toFixed(NUMBER_INPUT_FIXED_DECIMAL));
  };

  return (
    <div className='kilometerContainer'>
      <p className='inputTitle'>Enter your kilometers ran today</p>
      <form className='counterForm' onSubmit={handleSubmit}>
        <button type='button' onClick={decrease} disabled={kmCount <= 0}>
          -
        </button>

        <input
          type='number'
          className='counterInput'
          aria-label='numberInput'
          inputMode={'decimal'}
          value={kmCount}
          onChange={(e) => {
            setKmCount(
              (+e.currentTarget.value).toFixed(NUMBER_INPUT_FIXED_DECIMAL)
            );
          }}
        />
        <button type='button' onClick={increase}>
          +
        </button>
      </form>

      <button className='submitButton' type='submit'>
        Submit
      </button>
      <button
        type='button'
        onClick={() => setKmCount((0).toFixed(NUMBER_INPUT_FIXED_DECIMAL))}>
        Reset
      </button>
    </div>
  );
};

export default KilometerInput;
