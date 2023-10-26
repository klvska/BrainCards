import { ref, push } from "firebase/database";
import { db, app } from "../config/firebaseConfig"; // Importuj swój moduł bazy danych

// Funkcja do dodawania fiszki do bazy danych
export const addFlashcard = (flashcard) => {
  const flashcardsRef = ref(db, "flashcards"); // Przygotuj referencję do "flashcards" w bazie danych

  // Dodaj nową fiszkę do bazy danych przy użyciu push()
  push(flashcardsRef, flashcard)
    .then(() => {
      console.log("Fiszka została dodana do bazy danych.");
    })
    .catch((error) => {
      console.error("Błąd podczas dodawania fiszki do bazy danych:", error);
    });
};
