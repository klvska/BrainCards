import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { RegistrationForm } from "./components/RegistrationForm";
import { LoginForm } from "./components/LoginForm";
import { Header } from "./components/Header";
import { UserProfile } from "./pages/UserProfile";
import { FlashcardSetForm } from "./components/FlashcardSetForm";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/flashcards" element={<FlashcardSetForm />} />
          <Route path="/fiszki" element={<Home />} />
          <Route
            path="/"
            element={
              <div className="container">
                <h1>
                  Witaj na stronie Brain Cards. Wybierz akcję logowania lub
                  rejestracji z menu nawigacyjnego.
                </h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
