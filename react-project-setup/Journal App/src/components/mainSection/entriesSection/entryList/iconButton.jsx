import star from "../../../../assets/star.svg";
import starFilled from "../../../../assets/star-filled.svg";

export default function IconButton({ isFavorited }) {
  return isFavorited ? (
    <button type="button" className="icon-button">
      <img
        className="starButton-image"
        src={starFilled}
        alt="star-filled"
      ></img>
    </button>
  ) : (
    <button type="button" className="icon-button">
      <img className="starButton-image" src={star} alt="star"></img>
    </button>
  );
}
