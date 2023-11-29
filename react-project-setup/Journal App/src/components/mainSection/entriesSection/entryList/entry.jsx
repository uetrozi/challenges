import IconButton from "./iconButton.jsx";
import { useState } from "react";

export default function Entry({ title, date, text }) {
  const [Favorited, setFavorited] = useState(false);

  function handleFavClick() {
    setFavorited(!Favorited);
    console.log(isFavorited);
  }

  return (
    <li className="entry">
      <span className="entry-date">{date}</span>
      <IconButton isFavorited={Favorited} onclick={handleFavClick} />
      <h3 className="entry-title">{title}</h3>
      <p className="entry-text">{text}</p>
    </li>
  );
}

// const [Favorited, setFavorited] = useState(false)

// onclick={() => setFavorited(!Favorited)}
