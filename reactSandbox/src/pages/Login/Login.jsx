import { useState } from "react";
import "./Login.css";

export function Login() {
  return (
    <form className="signup-form">
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
    </form>
  );
}
