import React from "react";
import "./styles.css";

export default function App() {
  return <GetSum valueA={76} valueB={456} />;
}

function GetSum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
