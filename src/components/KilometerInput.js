import React, { useState } from "react";
import "../css/KilometerInput.css";

const KilometerInput = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  const handleSubmit = () => {
    window.location.reload(false);
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
          value={count}
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
