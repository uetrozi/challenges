import Tabs from "./tabs.jsx"; 

export default function TabBar() {
  return (
    <div className="main-section__entriesSection-tabBar">
      <Tabs name="All Entries" numberOfEntries={3} />
      <Tabs name="Favorites" numberOfEntries={1} />
    </div>
  );
}
