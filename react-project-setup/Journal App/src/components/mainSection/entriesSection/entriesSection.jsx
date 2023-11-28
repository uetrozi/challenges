import TabBar from "./tabBar/tabBar.jsx";
import EntryList from "./entryList/entryList.jsx";

export default function EntriesSection() {
  return (
    <div className="main-section__entriesSection">
      <TabBar />
      <EntryList />
    </div>
  );
}
