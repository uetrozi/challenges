export default function Tabs({ name, numberOfEntries }) {
  return (
    <a className="tab" href="#">
      {name} {numberOfEntries}
    </a>
  );
}
