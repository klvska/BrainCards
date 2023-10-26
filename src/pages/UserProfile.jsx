import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      setEmail(auth.currentUser.email || "");
    }
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Zostałeś wylogowany");
      })
      .catch((error) => {
        console.error("Błąd podczas wylogowywania:", error);
      });
  };

  return (
    <div>
      <h2>Twój profil</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Wyloguj się</button>
      <Link to="/">Przejdź do dashboardu</Link>
    </div>
  );
};
