import EntryForm from "./entryForm/entryForm.jsx";
import EntriesSection from "./entriesSection/entriesSection.jsx";

export default function MainSection() {
  return (
    <div className="main-section">
      <EntryForm />
      <EntriesSection />
    </div>
  );
}
