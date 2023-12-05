import React, { useState } from 'react';
import "./QuestionComponent.css"
const QuestionComponent = ({ question, onSelectOption,questionNumber, onNextQuestion }) => {
  const { id, questionText, options,score } = question;
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Limit the input to single letters only
    const inputValue = e.target.value.toLowerCase();
    setUserAnswer(inputValue);
  };

  const handleAnswerSubmit = () => {
    // The answer should be a,b,c or d
    if (question && userAnswer.match(/[a-d]/)) {
      onSelectOption(id, options[userAnswer.charCodeAt(0) - 97]);
      // Move to the next question
      onNextQuestion();
      setUserAnswer('');
      setErrorMessage('');
    } else {
      // Inform the user to answer the question with a,b,c or d only
      setUserAnswer('');
      setErrorMessage('Invalid choice. Please enter a valid choice (a, b, c, or d).');
    }
  };

  return (
      <div style={{ textAlign: 'center' }} className="container">
        <h2>
          <span style={{ color: 'blue' }}>{`Question ${questionNumber}:`}</span>
          {` ${questionText} (`}
          <span style={{ color: 'green' }}>{`Score: ${score}`}</span>
          {`)`}
        </h2>

        {options.map((option, index) => (
            <div className="question" key={index}>
              <p>{`${String.fromCharCode(97 + index)}. ${option}`}</p>
            </div>
        ))}

        <form>
          <input
              type="text"
              value={userAnswer}
              onChange={handleInputChange}
              maxLength={1} // Limit input to one character
          />
          <button type="button" onClick={handleAnswerSubmit}>
            Submit Answer
          </button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
  );
};

export default QuestionComponent;