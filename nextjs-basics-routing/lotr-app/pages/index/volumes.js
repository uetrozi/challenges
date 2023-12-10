import { introduction, volumes } from "../data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: var(--color-smoke);
  padding: 30px;
`;

const StyledHeading = styled.h1`
  font: var(--font-headline-1);
`;

const StyledBody = styled.p`
  font: var(--font-body);
`;

const StyledHeading2 = styled.h2`
  font: var(--font-headline-2);
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;
  gap: 10%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledListItem = styled.li``;

const StyledImage = styled.img`
  box-shadow: var(--box-shadow-book);
  width: 100%;

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font: var(--font-caption);
  color: var(--color-earth);
`;

export default function Overview() {
  const router = useRouter();

  // function handleRandomVolume() {
  //   const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
  //   router.push("/index/volumes/" + randomVolume.slug);
  // }

  return (
    <StyledSection>
      <StyledHeading>The Lord of the Rings</StyledHeading>
      <StyledBody>{introduction}</StyledBody>
      <StyledHeading2>All Volumes</StyledHeading2>
      <StyledList>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <StyledLink href={"/index/volumes/" + volume.slug}>
              <StyledImage
                src={volume.cover}
                alt={"Book Cover of " + volume.title}
              />
              <br></br>

              {volume.title}
            </StyledLink>
          </li>
        ))}
      </StyledList>

      {/* <button onClick={handleRandomVolume}>Go to random Volume</button> */}
    </StyledSection>
  );
}
