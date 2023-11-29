import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // const [emoji, setEmoji] = useState("");

  const [code, setCode] = useState("?");

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <h3>The current Code is: {code}</h3>
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
