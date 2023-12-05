package com.example.quiz1.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Question {
    private final int id;
    private final String questionText;
    private List<String> options;
    private final String correctAnswer;
    private final int score;

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

    public List<String> getOptions() {
        return options;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }


    public void setOptions(List<String> options) {
        this.options = options;
    }
    public List<String> randomizeOptions(List<String> options) {
        this.options = new ArrayList<>(options);
        Collections.shuffle(this.options);
        return this.options;
    }

    public String getQuestionText() {
        return questionText;
    }

    public int getScore() {
        return score;
    }

}
