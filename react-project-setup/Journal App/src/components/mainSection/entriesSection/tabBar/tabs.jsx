export default function Tabs({ name, numberOfEntries }) {
  return (
    <div className="tab">
      <button type="button" className="tab__links">
        {name}
      </button>
      <span className="tab__badge">{numberOfEntries}</span>
    </div>
  );
}
