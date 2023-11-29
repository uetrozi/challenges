import Entry from "./entry.jsx";

const EntryData = {
  title: "This is a title",
  date: "04.05.2022",
  text: "Lorem pisom dolores",
};

export default function EntryList() {
  return (
    <div className="entryList">
      <Entry
        title={EntryData.title}
        date={EntryData.date}
        text={EntryData.text}
      />
    </div>
  );
}
