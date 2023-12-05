package com.example.quiz1.model;

public class QuizAnswer {
    private int id;
    private String answer;

    public void setId(int id) {
        this.id = id;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public String getAnswer() {
        return answer;
    }

    public QuizAnswer(int id, String answer) {
        this.id = id;
        this.answer = answer;
    }
}
