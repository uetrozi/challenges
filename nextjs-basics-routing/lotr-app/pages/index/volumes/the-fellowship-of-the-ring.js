import { volumes } from "../../../resourceslotr/lib/data";
import Link from "next/link";
import Image from "next/image";
import cover from "resourceslotr/images/the-fellowship-of-the-ring.png";

const book = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");

export default function Detail() {
  
  return (
    <div>
      <Link href="../volumes">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {" "}
        {book.books.map((part) => (
            <li key={part.ordinal}>
            {part.ordinal}: {part.title}
          </li>
        ))}
      </ul>
        <Image
          src={cover}
          height={230}
          width={140}
          alt={"Book Cover of " + book.title}
        />
        <div>
      <button>
        <Link href="/index/volumes/the-return-of-the-king">Next Volume</Link>
      </button>
      </div>
    </div>
  );
}
