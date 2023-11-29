import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  const userRoles = user.roles;
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {userRoles.map((roles) => (
          <Tag key={roles} tag={roles} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
