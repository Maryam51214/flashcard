import React,{ useState } from 'react';


const Flashcard = ({question,answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="flashcard">
            <div className="question">{question}</div>
            {showAnswer && <div className="answer">{answer}</div>}
            <button onClick={() => setShowAnswer(!showAnswer)}>
                setShowAnswer(!showAnswer)
                {showAnswer ? 'Hide Answer' : 'show Answer'}</button>
                

        </div>
    );
};
export default Flashcard;