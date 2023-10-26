import React, { useState } from "react";
import { addFlashcard } from "../services/FlashcardService";

export const FlashcardSetForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAddFlashcard = () => {
    const newFlashcard = { question, answer };
    addFlashcard(newFlashcard); // Wykorzystujemy funkcję z FlashcardService do zapisu fiszki w bazie danych
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="flashcard-set-form">
      <input
        type="text"
        placeholder="Pytanie"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Odpowiedź"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleAddFlashcard}>Dodaj fiszkę</button>
    </div>
  );
};
