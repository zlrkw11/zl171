import Toggle from "../theme/Toggle";

export default function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a className="nav-link">
        <Toggle />
      </a>
    </nav>
  );
}
