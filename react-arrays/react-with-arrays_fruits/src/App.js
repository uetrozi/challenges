import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 0,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 2,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 3,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 4,
      name: "🫐 blueberry",
      color: "blue",
    },
    {
      id: 5,
      name: "🍇 grapes",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} />
      ))}
    </div>
  );
}
