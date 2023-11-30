import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function handleClick(event) {
    if (event.target.textContent == "-") {
      setCounter(counter - 10);
    } else {
      setCounter(counter + 10);
    }
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          onClick={handleClick}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
