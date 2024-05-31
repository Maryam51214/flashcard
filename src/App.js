import React, {useState} from 'react';
import './App.css';
import FlashcardQuiz from "./component/FlashcardQuiz";
function App() {
  return (
   <div className='App'>
      <header className='App-header'>
        <h1>
          Flashcard Quiz App
        </h1>

      </header>
    
      <FlashcardQuiz />
      </div>
    
  );
}

export default App;
