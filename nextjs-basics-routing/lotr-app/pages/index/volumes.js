import { introduction, volumes } from "../../resourceslotr/lib/data";
import Link from "next/link";

export default function Overview() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={"/index/volumes/" + volume.slug}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
