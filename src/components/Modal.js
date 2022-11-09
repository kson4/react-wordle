import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p>You correctly guessed the word: {solution} </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Unlucky!</h1>
          <p>
            Better luck next time. The answer was:
            <p className="solution">{solution}</p>
          </p>
        </div>
      )}
    </div>
  );
}
