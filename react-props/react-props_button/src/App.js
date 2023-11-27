import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <CreateButton
      color="green"
      disabled={false}
      text="What a nice button!"
      onClick={handleClick}
    />
  );
}

function CreateButton({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        height: "100px",
        width: "300px",
        borderRadius: "50px",
        backgroundColor: color,
        color: "White",
      }}
    >
      {text}
    </button>
  );
}
