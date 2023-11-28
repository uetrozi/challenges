import logo from "../img/logo.jpg";
import CreateImage from "../Components/image.js";
import CreateLink from "../Components/link.js";

export default function CreateLogo() {
  return ( 
    <CreateLink href="#">
      <CreateImage src={logo} alt={logo}></CreateImage>
    </CreateLink>
  );
}
