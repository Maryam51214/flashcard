import React,{ useState } from 'react';

import Flashcard from './component/Flashcard';


const FlashcardQuiz = () => {
    const [ flashcards , setFlashcards]= useState([
        {
            id: 1, question: 'What is React?' , answer: 'A Javascript liberary for building user interfaces'},
            {
                id: 2, question: 'What is component?' , answer: 'A reusable piece of UI'},
                {
                    id: 3, question: 'What is useState?' , answer: 'A React hook for managing state'},
    ]);

    return (
        <div className="flashcard-quiz">
            {flashcards.map(flashcard => (
                <Flashcard key={flashcard.id}
                question={ flashcard.question}
            answer={flashcard.answer} />

            ))}

        </div>
    );

};
export default FlashcardQuiz;