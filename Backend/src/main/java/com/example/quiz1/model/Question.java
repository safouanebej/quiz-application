package com.example.quiz1.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Question {
    private int id;
    private String questionText;
    private List<String> options;
    private String correctAnswer;
    private int score;

    public Question(int id, String questionText, List<String> options, String correctAnswer, int score) {
        this.id = id;
        this.questionText = questionText;
        this.options = new ArrayList<>(options);
        Collections.shuffle(this.options);
        this.correctAnswer = correctAnswer;
        this.score = score;
    }

    public int getId() {
        return id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public List<String> getOptions() {
        return options;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }

}
