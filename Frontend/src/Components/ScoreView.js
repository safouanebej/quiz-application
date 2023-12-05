import React from 'react';
import "./ScoreView.css"

const ScoreView = ({ quizResult, onReset }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Quiz Result:</h3>
      <pre>{quizResult}</pre>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default ScoreView;