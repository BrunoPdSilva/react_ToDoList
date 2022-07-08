import { AddressBook } from "phosphor-react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import "./Navbar.css";

export function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="navbar">
      <div className="name-icon">
        <AddressBook size={36} color="#fff" />
        {user && <span>{user.displayName}</span>}
      </div>

      <ul>
        {!user && (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/signup">Cadastrar</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </div>
  );
}
