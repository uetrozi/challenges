export default function CreateLink({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
