import React, { useState } from "react";
import "../css/KilometerInput.css";
import { firestore } from "../firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";

const KilometerInput = () => {
  const [kmCount, setKmCount] = useState(0);

  const increase = () => setKmCount(kmCount + 1);
  const decrease = () => setKmCount(kmCount - 1);

  const year = new Date().getFullYear();

  const collectionRef = collection(firestore, `${year} Runs`);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addDoc(collectionRef, { Kilometers: kmCount, date: Timestamp.now() });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="kilometerContainer">
      <p className="inputTitle">Enter your kilometers ran today</p>
      <form className="counterForm" onSubmit={handleSubmit}>
        <button className="decreaseButton" type="button" onClick={decrease}>
          -
        </button>
        <input
          type="text"
          value={kmCount}
          readOnly
          className="counterInput"
          aria-label="numberInput"
        />
        <button className="increaseButton" type="button" onClick={increase}>
          +
        </button>
      </form>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default KilometerInput;
