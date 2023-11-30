import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleReservation(event) {
    if (event.target.textContent == "+") {
      setPeople(people + 1);
    } else {
      setPeople(people - 1);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onhandleReservation={handleReservation} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
