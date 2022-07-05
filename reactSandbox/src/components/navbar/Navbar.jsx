import { AddressBook } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const handleLogout = () => {};

export function Navbar() {
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
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}
