import React, { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { db } from "../config/firebaseConfig";
import { Flashcard } from "../components/Flashcard";
import { FlashcardSetForm } from "../components/FlashcardSetForm";

export function Home() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const flashcardsRef = ref(db, "flashcards");

    get(flashcardsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const flashcardArray = Object.values(data);
        setFlashcards(flashcardArray);
      }
    });
  }, []);

  return (
    <div>
      <h1>Twoje fiszki</h1>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} flashcard={flashcard} />
      ))}
      <FlashcardSetForm />
    </div>
  );
}
