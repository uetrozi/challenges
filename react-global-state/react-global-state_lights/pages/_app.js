import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { use, useState } from "react";

const starterLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(starterLights);
  const [$isDimmed, setIsDimmed] = useState(false);

  const countOfOnLights = lights.filter((light) => light.isOn === true).length;

  function handleLightToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
    handleDimmed();
  }

  // V V This one still has a delay that needs to be fixed
  function handleDimmed() {
    countOfOnLights === 0 ? setIsDimmed(true) : setIsDimmed(false);
  }
  // ^^

  function handleAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
    setIsDimmed(false);
  }

  function handleAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
    setIsDimmed(true);
  }

  return (
    <Layout isDimmed={$isDimmed}>
      <GlobalStyle />
      <Component
        lights={lights}
        onToggle={handleLightToggle}
        countOfOnLights={countOfOnLights}
        allOn={handleAllOn}
        allOff={handleAllOff}
        {...pageProps}
      />
    </Layout>
  );
}
