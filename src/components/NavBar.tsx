import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { route: "/candidate-list", name: "Liste des candidats" },
    { route: "/apply", name: "Nouvelle Candidature" },
    { route: "https://github.com", name: "Contact" },
    { route: "/chat", name: "IA" },
  ];
  return (
    <div className="navbar">
      {Array.from(links).map((route_name_pair) => (
        <Link
          className="navlink"
          to={route_name_pair.route}
          key={route_name_pair.route}
        >
          <h1>{route_name_pair.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
