import React, { useState } from "react";
import "../css/KilometerInput.css";

const KilometerInput = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="kilometerContainer">
      <button className="decreaseButton" onClick={decrease}>
        -
      </button>
      <input
        type="text"
        value={count}
        readOnly
        className="counterInput"
        aria-label="NumberInput"
      />
      <button className="increaseButton" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default KilometerInput;
