import { NavLink } from "react-router";

export default function Menu() {
  const linkStyle = {
    padding: "10px 15px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <nav style={{ backgroundColor: "blue", padding: "10px", display: "flex", gap: "10px" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "white" : "white",
          backgroundColor: isActive ? "#555" : "transparent",
        })}
      >
        Inicio
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "white" : "white",
          backgroundColor: isActive ? "#555" : "transparent",
        })}
      >
        Contact
      </NavLink>

      <NavLink
        to="/user"
        style={({ isActive }) => ({
          ...linkStyle,
          color: isActive ? "white" : "white",
          backgroundColor: isActive ? "#555" : "transparent",
        })}
      >
        Users
      </NavLink>
    </nav>
  );
}