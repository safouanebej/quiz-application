import React, { useState } from 'react';
import "./QuizView.css";
import quizImage from '../../../../Quiz1/Frontend/src/Components/Images/img.png';
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
        <img src={quizImage} alt="" width="200" height="200" style={{ zIndex: '1' }} />
        {!accepted && (
            <div className="welcome-container" style={{ textAlign: 'center' }}>
              <h2>Welcome to the Java Quiz!</h2>
              <p>Please read and accept the rules:</p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                <li className="bullet-point-item">
                  You have 20 questions to answer
                </li>
                <li className="bullet-point-item">
                  Each question has a score and 4 options
                </li>
                <li className="bullet-point-item">
                  The total score should equal 1000.
                </li>
                <li className="bullet-point-item">
                  If you score more than 600 you will pass the Quiz otherwise not.
                </li>
                <li className="bullet-point-item">
                  There is one bonus question with a score of 25.
                </li>
                <li className="bullet-point-item">
                  If you have submitted an answer, you can't go back and modify it.
                </li>
              </ul>
              <div className="buttons-container" style={{ textAlign: 'center' }}>
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
