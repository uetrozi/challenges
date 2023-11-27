import React from "react";
import "./styles.css";

export default function App() {
  return <CreateSmiley isHappy={false} />;
}

function CreateSmiley({ isHappy }) {
  return <div>{isHappy ? <span>😊 </span> : <span>🥺</span>}</div>;
}
