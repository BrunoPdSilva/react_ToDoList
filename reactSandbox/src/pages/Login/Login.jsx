import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleLogin = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="signup-form" onSubmit={handleLogin}>
      <h2 className="form-title">Entrar</h2>
      <label>
        <p>email:</p>
        <input type="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <p>senha:</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <button>Entrar</button>
      {error && <p>Email ou senha incorretos.</p>}
    </form>
  );
}
