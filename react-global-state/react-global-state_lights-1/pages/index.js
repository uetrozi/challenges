import Link from "../components/Link";
import useBearStore from "@/store";

export default function HomePage() {
  const countOfOnLights = useBearStore(
    (state) => state.lights.filter((light) => light.isOn === true).length
  );

  return (
    <div>
      <h1>Home</h1>
      <p>{countOfOnLights} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
