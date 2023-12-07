import { volumes } from "../../data";
import Link from "next/link";
import Image from "next/image";


//so far this is not working and does nothing, i hope/guess that will change with the next sessions??
//links to prev and next volumes need a function when to nor render

export default function Detail() {
  

  return (
    <div>
      <Link href="../volumes">All Volumes</Link>
      <h1>{slug.title}</h1>
      <p>{slug.description}</p>
      <ul>
        {" "}
        {slug.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={slug.cover}
        height={230}
        width={140}
        alt={"Book Cover of " + slug.title}
      />
      <div>
        <button>
          <Link href={`/index/volumes/${slug}`}>Previous Volume</Link>
        </button>
        <button>
          <Link href={`/index/volumes/${slug}`}>Next Volume</Link>
        </button>
      </div>
    </div>
  );
}
