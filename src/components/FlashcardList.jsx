import React from "react";
import { Flashcard } from "./Flashcard";

export function FlashcardsList({ flashcards }) {
  return (
    <div>
      <h2>Twoje fiszki</h2>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} flashcard={flashcard} />
      ))}
    </div>
  );
}
