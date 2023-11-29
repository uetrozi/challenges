import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="button-container">
        <button type="button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
