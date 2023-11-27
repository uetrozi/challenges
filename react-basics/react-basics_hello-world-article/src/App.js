import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>
        Hello Nami!
        <p>I made this for you. 🌊👋🏽</p>
      </h1>
    </article>
  );
}
