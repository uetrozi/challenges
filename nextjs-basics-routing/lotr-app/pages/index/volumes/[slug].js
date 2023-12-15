import { volumes } from "../../data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ $color}) => ($color ? $color : null)};
`;


export default function Detail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);

  const currentVolume = volumes[currentIndex];
  const nextVolume = volumes[currentIndex + 1];
  const previousVolume = volumes[currentIndex - 1];

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books, color } = currentVolume;

  return (
    <StyledDiv $color={color}>
      <Link href="../volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {" "}
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        height={230}
        width={140}
        alt={"Book Cover of " + title}
      />
      {previousVolume ? (
        <div>
          <button>
            <Link href={`/index/volumes/${previousVolume.slug}`}>
              Previous Volume: {previousVolume.title}
            </Link>
          </button>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <button>
            <Link href={`/index/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title}
            </Link>
          </button>
        </div>
      ) : null}
    </StyledDiv>
  );
}

