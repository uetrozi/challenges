import Link from "../components/Link";
import Lights from "../components/Lights";
import useBearStore from "@/store";

export default function Rooms({ lights, toggleLight }) {
  const countOfOnLights = useBearStore(
    (state) => state.lights.filter((light) => light.isOn === true).length
  );

  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <p>{countOfOnLights} light(s) are on.</p>
      <Lights />
    </>
  );
}
