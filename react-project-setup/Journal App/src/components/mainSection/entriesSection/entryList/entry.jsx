import IconButton from "./iconButton.jsx";

export default function Entry({ title, date, text, isFavorited }) {
  return (
    <li className="entry">
      <span className="entry-date">{date}</span>
      <h3 className="entry-title">{title}</h3>
      <p className="entry-text">{text}</p>
      <IconButton isFavorited={isFavorited} />
    </li>
  );
}
