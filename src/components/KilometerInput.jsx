import { useState } from 'react';
import '../css/KilometerInput.css';
import { firestore } from '../firebase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { THIS_YEAR } from '../utils/constants';

const KilometerInput = () => {
  const [kmCount, setKmCount] = useState(0);

  const increase = () => setKmCount(kmCount + 1);
  const decrease = () => setKmCount(kmCount - 1);

  const collectionRef = collection(firestore, `${THIS_YEAR} runs`); // Creates collection if one doesnt exist

  const handleSubmit = async (e) => {
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
    setKmCount(0);
  };

  return (
    <div className='kilometerContainer'>
      <p className='inputTitle'>Enter your kilometers ran today</p>
      <form className='counterForm' onSubmit={handleSubmit}>
        <button className='decreaseButton' type='button' onClick={decrease}>
          -
        </button>
        <input
          type='text'
          value={kmCount}
          readOnly
          className='counterInput'
          aria-label='numberInput'
        />
        <button className='increaseButton' type='button' onClick={increase}>
          +
        </button>
      </form>
      <button className='submitButton' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default KilometerInput;
