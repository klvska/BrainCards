import React, { useState } from "react";
import {
  app,
  auth,
  signInWithEmailAndPassword,
} from "../config/firebaseConfig";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Zalogowano użytkownika
        const user = userCredential.user;
        console.log("Zalogowano użytkownika:", user);
        // Tutaj możesz przekierować użytkownika do innej strony lub wykonać inne operacje
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Błąd podczas logowania:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form>
        <input
          type="email"
          placeholder="Adres email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Zaloguj się
        </button>
      </form>
    </div>
  );
};
