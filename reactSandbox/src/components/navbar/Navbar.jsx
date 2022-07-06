import { AddressBook } from "phosphor-react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import "./Navbar.css";

export function Navbar() {
  const { logout } = useLogout();
  
  return (
    <div className="navbar">
      <div className="name-icon">
        <AddressBook size={36} color="#fff" />
        <span>Bruno Peres</span>
      </div>

      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}
