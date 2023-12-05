import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import QuizView from './Components/QuizView';
import QuestionComponent from './Components/QuestionComponent';
import ScoreView from './Components/ScoreView';
import "./App.css"

function App() {
  const [questions, setQuestions] = useState([]);
  const {setError, setValue,getValues } = useForm();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [isQuizOver, setIsQuizOver] = useState(false);
  // Get the questions from the backend
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/quiz/questions');
      setQuestions(response.data);
      response.data.forEach((question) => setValue(`answers.${question.id}`, ''));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/quiz/questions');
        setQuestions(response.data);
        response.data.forEach((question) => setValue(`answers.${question.id}`, ''));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();

  }, [setValue]);
  // Update the answers of the user
  const onSelectOption = (questionId, selectedOption) => {
    setValue(`answers.${questionId}`, { id: questionId, answer: selectedOption });
  };
  const onSeeResultClick = () => {
    // Set the isQuizOver variable to true
    setIsQuizOver(true);
  };
  const onNextQuestion = () => {
    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    // Check if it's the last question
    if (currentQuestionIndex === questions.length - 1) {
      onSubmit();
    }
  };

  const onAccept = () => {
    setShowQuiz(true);
  };
  const onReject = () => {
    setShowQuiz(false);
  };
  const handleReset = () => {
    // Reset all relevant state variables to restart the quiz
    fetchQuestions();
    setShowQuiz(false);
    setQuizResult(null);
    setIsQuizOver(false);
    setCurrentQuestionIndex(0);
  };
  // Submit the answers of the user to the backend and get the quiz result
  const onSubmit = async () => {
    try {
      const answersArray = questions.map((question) => ({
        id: question.id,
        answer: getValues(`answers.${question.id}`).answer,
      }));
      const response = await axios.post('http://localhost:8080/api/quiz/submit', answersArray);

      const result = response.data;
      setQuizResult(result);

    } catch (error) {
      console.error('Error submitting answers:', error);
      setError('submission', { type: 'manual', message: 'Error submitting answers' });
    }
  };

  return (
      <div>
        {!showQuiz ? (
            <div>
              <QuizView onAccept={onAccept} onReject={onReject} />
            </div>
        ) : currentQuestionIndex < questions.length ? (
            <QuestionComponent
                question={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex+1}
                onSelectOption={onSelectOption}
                onNextQuestion={onNextQuestion}
            />
        ) : (
            <div style={{ textAlign: 'center' }}>
              {isQuizOver ? (
                  <ScoreView quizResult={quizResult} onReset={handleReset} />
              ) : (
                  <button type="button" onClick={onSeeResultClick}>
                    See Your Result
                  </button>
              )}
            </div>
        )}
      </div>
  );
}

export default App;
