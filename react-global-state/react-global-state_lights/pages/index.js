import Link from "../components/Link";

export default function HomePage({countOfOnLights}) {
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
