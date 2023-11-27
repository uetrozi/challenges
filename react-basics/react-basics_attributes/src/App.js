import React from "react";
import "./styles.css";

export default function App() {
  return <WriteArticle />;
}

function WriteArticle() {
  return (
    <article className="article">
      <h2 className="article_title">This is the title</h2>
      <label htmlFor="Label">Write something here 👇🏽</label>
      <input id="Label"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa"
      >
        🌊 Nami
      </a>
    </article>
  );
}
