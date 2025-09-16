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
    <nav className="bg-green-600 p-4 flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 font-bold text-white rounded transition-colors duration-300
          ${isActive ? 'bg-green-800' : 'hover:bg-green-700'}`
        }
      >
        Inicio
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 font-bold text-white rounded transition-colors duration-300
          ${isActive ? 'bg-green-800' : 'hover:bg-green-700'}`
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/user"
        className={({ isActive }) =>
          `px-4 py-2 font-bold text-white rounded transition-colors duration-300
          ${isActive ? 'bg-green-800' : 'hover:bg-green-700'}`
        }
      >
        Users
      </NavLink>
    </nav>
  );
}