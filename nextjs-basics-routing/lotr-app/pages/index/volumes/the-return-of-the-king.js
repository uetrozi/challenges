import { volumes } from "../../data";
import Link from "next/link";
import Image from "next/image";

const book = volumes.find(({ slug }) => slug === "the-return-of-the-king");

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
        src={book.cover}
        height={230}
        width={140}
        alt={"Book Cover of " + book.title}
      />
      <div>
        <button>
          <Link href="/index/volumes/the-two-towers">Previous Volume</Link>
        </button>
      </div>
    </div>
  );
}
