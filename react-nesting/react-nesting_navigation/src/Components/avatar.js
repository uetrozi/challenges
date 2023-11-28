import avatar from "../img/avatar.jpg";
import CreateImage from "../Components/image.js";

export default function CreateAvatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <CreateImage src={avatar} alt={avatar}></CreateImage>
    </button>
  );
}
