import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Signup.css";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSignup = e => {
    e.preventDefault();

    signup(email, password, name);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="signup-form" onSubmit={handleSignup}>
      <h2 className="form-title">Cadastre-se:</h2>
      <label>
        <p>nome:</p>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <p>email:</p>
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <p>senha:</p>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {isPending && <button>Carregando...</button>}
      {!isPending && <button>Cadastrar</button>}
    </form>
  );
}
