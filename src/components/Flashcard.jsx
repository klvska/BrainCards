import React from "react";

export function Flashcard({ flashcard }) {
  // Tutaj możesz wykorzystać informacje z obiektu `flashcard`, aby wyświetlić zawartość fiszki.
  // Dla przykładu zakładamy, że `flashcard` zawiera pola `question` i `answer`.

  return (
    <div className="flashcard">
      <div className="flashcard-question">
        <h2>Pytanie:</h2>
        <p>{flashcard.question}</p>
      </div>
      <div className="flashcard-answer">
        <h2>Odpowiedź:</h2>
        <p>{flashcard.answer}</p>
      </div>
    </div>
  );
}
