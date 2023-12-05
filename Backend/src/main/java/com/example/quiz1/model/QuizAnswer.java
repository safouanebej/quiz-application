package com.example.quiz1.model;

public class QuizAnswer {
    // The list of the user answers(The id of the question and the answer of the user as String)
    private int id;
    private String answer;

    public QuizAnswer() {
        // Default constructor
    }

    public QuizAnswer(int id, String answer) {
        this.id = id;
        this.answer = answer;
    }
    public int getId() {
        return id;
    }

    public String getAnswer() {
        return answer;
    }

}
