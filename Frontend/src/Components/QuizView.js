import React, { useState } from 'react';
import "./QuizView.css"
const QuizView = ({ onAccept, onReject }) => {
  const [accepted, setAccepted] = useState(false);
  const [rejectMessage, setRejectMessage] = useState(null);

  const handleAccept = () => {
    setAccepted(true);
    onAccept(); 
  };

  const handleReject = () => {
    setAccepted(false);
    onReject(); 
    setRejectMessage("Thank you, maybe see you next time!");
  };

  return (
    <div className="quiz-interface-container" style={{ textAlign: 'center' }}>
      <h1>Quiz App</h1>
      {!accepted &&   (
        <div className="welcome-container" style={{ textAlign: 'center' }}>
          <h2>Welcome to the Quiz App!</h2>
          <p>Please read and accept the rules:</p>
          <ul>
            <li>You have 20 questions to answer</li>
            <li>Each question has a score and 4 options</li>
            <li>The total score should equal 1000.</li>
            <li>If you score more than 600 you will pass the Quiz otherwise not.</li>
          </ul>
          <div className="button-container" style={{ textAlign: 'center' }}>
            <button className="accept-button" onClick={handleAccept}>
              Yes, I accept
            </button>
            <button className="reject-button" onClick={handleReject}>
              No, I don't accept
            </button>
            {rejectMessage && <p>{rejectMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizView;
