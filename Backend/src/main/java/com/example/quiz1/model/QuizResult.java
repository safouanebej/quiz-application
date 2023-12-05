package com.example.quiz1.model;

import java.util.List;

public class QuizResult {
    private int totalscore;
    private int correctAnswers;
    private int wrongAnswers;
    private String percentage;
    private List<Question> wrong;

    public int getTotalscore() {
        return totalscore;
    }

    public int getCorrectAnswers() {
        return correctAnswers;
    }

    public int getWrongAnswers() {
        return wrongAnswers;
    }

    public String getPercentage() {
        return percentage;
    }

    public List<Question> getWrong() {
        return wrong;
    }

    public QuizResult(int totalscore, int correctAnswers, int wrongAnswers, String percentage, List<Question> wrong) {
        this.totalscore = totalscore;
        this.correctAnswers = correctAnswers;
        this.wrongAnswers = wrongAnswers;
        this.percentage = percentage;
        this.wrong = wrong;
    }

    public void setTotalscore(int totalscore) {
        this.totalscore = totalscore;
    }

    public void setCorrectAnswers(int correctAnswers) {
        this.correctAnswers = correctAnswers;
    }

    public void setWrongAnswers(int wrongAnswers) {
        this.wrongAnswers = wrongAnswers;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }

    public void setWrong(List<Question> wrong) {
        this.wrong = wrong;
    }
}
