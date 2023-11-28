import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>No Click me!</Button>
      <Button>Click me first, then the others!</Button>
      <Button><p> I dont mind if you click me</p></Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
