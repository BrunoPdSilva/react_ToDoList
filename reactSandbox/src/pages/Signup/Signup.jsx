import { useState } from "react";
import "./Signup.css";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="signup-form">
      <h2 className="form-title">Cadastre-se:</h2>
      <label>
        <p>nome:</p>
        <input type="text" onChange={e => setName(e.target.value)} />
      </label>
      <label>
        <p>email:</p>
        <input type="email" onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        <p>senha:</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <button>Cadastrar</button>
    </form>
  );
}
