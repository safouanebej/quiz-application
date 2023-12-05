import React, { useState } from 'react';
import "./QuestionComponent"
const QuestionComponent = ({ question, onSelectOption, onNextQuestion }) => {
  const { id, questionText, options } = question;
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Limit the input to single letters only
    const inputValue = e.target.value.toLowerCase().charAt(0);
    setUserAnswer(inputValue);
  };

  const handleAnswerSubmit = () => {
    if (question && userAnswer.match(/[a-d]/)) {
      onSelectOption(id, options[userAnswer.charCodeAt(0) - 97]);
      // Move to the next question
      onNextQuestion();
      setUserAnswer('');
      setErrorMessage('');
    } else {
      //alert('Invalid choice. Please enter a valid choice (a, b, c, or d).');
      setUserAnswer('');
      setErrorMessage('Invalid choice. Please enter a valid choice (a, b, c, or d).');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{questionText}</h2>

      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={`options-${id}`}
              value={option}
              onChange={() => onSelectOption(id, option)}
              disabled
            />
            {`${String.fromCharCode(97 + index)}. ${option}`}
          </label>
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
