import "./styles.css";

import CreateHeader from "./Components/header.js";
import CreateNavigation from "./Components/navigation.js";
import CreateLink from "./Components/link.js";
import CreateLogo from "./Components/logo.js";
import CreateAvatar from "./Components/avatar.js";

export default function App() {
  return (
    <>
      <CreateHeader>
        <CreateLogo />

        <CreateNavigation>
          <CreateLink href="#home">Home</CreateLink>
          <CreateLink href="#about">About</CreateLink>
          <CreateLink href="#impressum">Impressum</CreateLink>
        </CreateNavigation>
        <CreateAvatar />
      </CreateHeader>
      <main>content goes here…</main>
    </>
  );
}
