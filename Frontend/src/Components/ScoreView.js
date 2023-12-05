import React from 'react';
import './ScoreView.css';

const ScoreView = ({ quizResult, onReset }) => {
    const { totalscore, correctAnswers, wrongAnswers,percentage,wrong } = quizResult;
    // Pass or fail message
    const passMessage = totalscore > 600 ? "Congratulations! You passed the quiz." : "Sorry, you did not pass the quiz.";

    return (
        <div className="score-view-container">
            <h3>Quiz Result:</h3>
            <div>
                <p>Total Score: {totalscore}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Wrong Answers: {wrongAnswers}</p>
                <p>Percentage: {percentage}</p>
            </div>
            {quizResult.wrong && (
                <div>
                    <h4>These are the questions that you did not pass, along with their correct answers:</h4>
                    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                        {wrong.map((question) => (
                            <li key={question.id}>
                                <div >
                                    <p>{question.questionText}</p>
                                    <p style={{ color: 'green' , fontWeight: 'bold' }}> Correct Answer: {question.correctAnswer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{passMessage}</p>
            <button type="button" onClick={onReset}>
                Reset
            </button>
        </div>
    );
};

export default ScoreView;