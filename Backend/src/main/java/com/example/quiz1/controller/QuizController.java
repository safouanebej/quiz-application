package com.example.quiz1.controller;

import com.example.quiz1.model.Question;
import com.example.quiz1.model.QuizAnswer;
import com.example.quiz1.model.QuizResult;
import com.example.quiz1.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin
public class QuizController {
    @Autowired
    private QuizService quizService;

    @GetMapping("/questions")
    public List<Question> getAllQuestions() {
        return quizService.getAllQuestions();
    }

    @PostMapping("/submit")
    public QuizResult submitAnswers(@RequestBody List<QuizAnswer> userAnswers) {
        return quizService.submitAnswers(userAnswers);
    }
}
