import React, { useState } from "react";
import {
  app,
  auth,
  createUserWithEmailAndPassword,
} from "../config/firebaseConfig";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Zarejestrowano użytkownika:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Błąd podczas rejestracji:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2>Rejestracja</h2>
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
        <button type="button" onClick={handleRegister}>
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};
