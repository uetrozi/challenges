import "./styles.css";

export default function App() {
  return <Greeting name="Maria" />;
}

function Greeting({ name }) {
  if (name == "Gimena" || name == "Sven") {
    return <h1>Hello, Coach! </h1>;
  } else {
    return <h1>Hello, {name}! </h1>;
  }
}
