import { introduction, volumes } from "../data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Overview() {
  const router = useRouter();
  const { slug } = router.query;

  function handleRandomVolume() {
    const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
    router.push("/index/volumes/" + randomVolume.slug);
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={"/index/volumes/" + volume.slug}>{volume.title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={handleRandomVolume}>Go to random Volume</button>
    </div>
  );
}
