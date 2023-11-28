import Entry from "./entry.jsx";

export default function EntryList() {
    return (
      <div className="EntriesSection__EntryList">
        <Entry title="This is a title" date="04.05.2022" text="lorem impsum dolores ips"
        isFavorited={true}/>
      </div>
    );
  }
  