import IconButton from "./iconButton.jsx";

export default function Entry({ title, date, text, isFavorited }) {
  return (
    <li className="EntryList__item">
      <span>{date}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <IconButton isFavorited={isFavorited} />
    </li>
  );
}
