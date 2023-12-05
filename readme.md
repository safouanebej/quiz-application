
## Quiz App

A web application for conducting a java quiz with a backend server to manage questions and evaluate user responses.

## Project Structure

The project is structured into frontend and backend components.

### Frontend

The frontend is developed using React, a JavaScript library for building user interfaces. The main components are:

- **App Component:** Orchestrates the flow of the quiz, fetches questions from the backend, handles user responses, and displays the quiz view, question view, and score view.

- **QuestionComponent:** Renders a single quiz question, options, and allows the user to select an answer.

- **QuizView:** Displays the introductory information and provides options to start or reject the quiz.

- **ScoreView:** Shows the user's quiz result, including total score, correct and wrong answers, and a list of wrong answers with correct responses.

### Backend

The backend is built using Java/Springboot. It provides API endpoints to:

- Retrieve quiz questions.
- Accept user responses, evaluate them and return the quiz result.

## Communication Flow

1. The frontend, upon user interaction, sends requests to the backend API endpoints using Axios, a promise-based HTTP client for the browser and Node.js.
2. The backend processes the requests and returns the necessary data or performs actions.
3. The frontend receives the data from the backend and updates the user interface accordingly.

## Getting Started

1. Clone the repository
2. Navigate to the frontend directory
3. Install the dependencies: `npm install`


## Configuration

- The Quiz App frontend requires the backend API to be running. By default, it expects the backend to be running at `http://localhost:8080`.
  If your backend is running at a different address, you can update the API endpoint in the src/App.js file.



## Usage

1. Run the springWebApplication in the backend directory
2. Start the React development server: `npm start`
3. Open your browser and visit `http://localhost:3000` to access the Quiz App.

## Improvement Points

- **Testing:** Develop and execute unit tests and integration tests for both frontend and backend components.
- **Database:** Linking a database to the backend using postgresql and spring Data JPA.
- **Security:** Implement authentication and authorization mechanisms to secure the quiz access and results.
- **Design:** Consider improvements in the design, including color schemes, fonts, and overall aesthetics to create a visually appealing application.
