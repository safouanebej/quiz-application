package com.example.quiz1.service;

import com.example.quiz1.model.Question;
import com.example.quiz1.model.QuizAnswer;
import com.example.quiz1.model.QuizResult;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class QuizService {
    private List<Question> questions;
    private int totalscore;

    public QuizService() {
        this.totalscore = 0;
        initializeQuestions();
    }

    private void initializeQuestions() {
        // Initialize the questions
        questions = new ArrayList<>( List.of(
                new Question(1,"What does JVM stand for?", List.of("Java Virtual Machine", "Java Visual Machine", "Java Virtual Memory", "Java Visual Memory"), "Java Virtual Machine",100),
                new Question(2,"Which keyword is used for the inheritance of classes and interfaces in Java?", List.of("extend", "inherits", "extends", "implements"), "extends",100),
                new Question(3,"What is the default value of the data type byte in Java?",
                        List.of("0.0", "0", "null", "'0'"), "0",100),
                new Question(4,"What is the purpose of the finally block in a try-catch-finally statement?",
                        List.of("It is used for declaring variables.", "It contains the code that will always be executed, regardless of whether an exception is thrown or not.", "It is used to handle exceptions.", "It is used to define methods."),
                        "It contains the code that will always be executed, regardless of whether an exception is thrown or not.",75),
                new Question(5,"What is the output of the following code snippet?" +
                        "String str1 = \"Java\";" +
                        "String str2 = new String(\"Java\");" +
                        "System.out.println(str1 == str2);",
                        List.of("true", "false", "Compile error", "Runtime error"),
                        "false",75),new Question(6, "What is the purpose of the 'break' statement in Java?",
                        List.of("To exit the program.", "To terminate a loop or switch statement and transfer control to the statement immediately following the loop or switch.", "To skip the current iteration of a loop.", "To create a new instance of a class."),
                        "To terminate a loop or switch statement and transfer control to the statement immediately following the loop or switch.", 75),
                new Question(7, "Which method is called when an object is garbage collected in Java?",
                        List.of("dispose()", "delete()", "finalize()", "clean()"),
                        "finalize()", 75),
                new Question(8, "What is the purpose of the 'super' keyword in Java?",
                        List.of("To call the superclass constructor.", "To access the superclass's fields and methods.", "To indicate a method override.", "To create a new instance of a class."),
                        "To access the superclass's fields and methods.", 40),
                new Question(9, "Which of the following is a valid declaration of a Java array?",
                        List.of("int[] numbers = new int[];", "int numbers[] = new int[];", "int numbers[5];", "int[5] numbers;"),
                        "int[] numbers = new int[];", 40),
                new Question(10, "What is the main purpose of the 'this' keyword in Java?",
                        List.of("To create a new instance of the current class.", "To refer to the current instance of the class.", "To access static methods.", "To prevent method overriding."),
                        "To refer to the current instance of the class.", 40),
                new Question(11, "Which of the following is true about the 'HashMap' class in Java?",
                        List.of("It allows duplicate keys.", "It does not allow null values.", "It is synchronized by default.", "It is part of the java.util package."),
                        "It allows duplicate keys.", 40),
                new Question(12, "What is the difference between 'equals()' and '==' in Java?",
                        List.of("They are the same and can be used interchangeably.", "equals() is used to compare primitive data types, and '==' is used for objects.", "'==' compares object references, and 'equals()' compares object content.", "There is no difference."),
                        "'==' compares object references, and 'equals()' compares object content.", 40),
                new Question(13, "Which design principle promotes code reusability in Java?",
                        List.of("Encapsulation", "Inheritance", "Polymorphism", "Abstraction"),
                        "Inheritance", 25),
                new Question(14, "What is the purpose of the 'transient' keyword in Java?",
                        List.of("To make a variable constant.", "To indicate that a variable should not be serialized.", "To declare a variable with a default value.", "To prevent method overriding."),
                        "To indicate that a variable should not be serialized.", 25),
                new Question(15, "Which of the following is a correct way to create a thread in Java?",
                        List.of("Thread t = new Thread();", "Thread t = Thread.create();", "Thread t = createThread();", "Thread t = startThread();"),
                        "Thread t = new Thread();", 25),
                new Question(16, "What is the role of the 'static' keyword in Java?",
                        List.of("To define a constant variable.", "To create an instance of a class.", "To indicate that a method or variable belongs to the class rather than an instance.", "To allow multiple inheritance."),
                        "To indicate that a method or variable belongs to the class rather than an instance.", 25),
                new Question(17, "What is the purpose of the 'interface' keyword in Java?",
                        List.of("To define a class.", "To implement multiple inheritance.", "To declare a variable.", "To create an object."),
                        "To implement multiple inheritance.", 25),
                new Question(18, "Which of the following is true about the 'StringBuilder' class in Java?",
                        List.of("It is synchronized.", "It is immutable.", "It is part of the java.util package.", "It is used to create mutable strings."),
                        "It is used to create mutable strings.", 25),
                new Question(19, """
                        What is the output of the following code snippet?
                        int x = 5;
                        System.out.println(x++);""",
                        List.of("5", "6", "Compiler error", "Runtime error"),
                        "5", 25),
                new Question(20, "(Bonus Question) Why do Java developers wear glasses?",
                        List.of("To look cool", "To see the bytecode", "To debug vision errors", "Because they can't C#"),
                        "Because they can't C#", 25)));
    }

    public List<Question> getAllQuestions() {
        // Randomize the questions order
        Collections.shuffle(questions);
        // This is a bonus Question
        for(Question question : questions){
            // Random order of answers
            question.setOptions(question.randomizeOptions(question.getOptions()));
        }
        return questions;
    }

    public Question getById(List<Question> questions,int id){
        if(questions.isEmpty()){
            return null;
        }

        for(Question obj : questions){
            if(obj.getId()==id){
                return obj;
            }
        }
        return null;
    }

    public QuizResult submitAnswers(List<QuizAnswer> userAnswers) {
        QuizResult quizResult = new QuizResult(0,0,0,"",new ArrayList<>());
        this.totalscore =0;
        int correctAnswers = 0;
        int wrongAnswers = 0;
        List<Question> helper = new ArrayList<>();
        if(userAnswers.isEmpty()){
            return quizResult;
        }
        // Calculate the score and count the number of wrong answers and correct ones
        for (QuizAnswer quizAnswer : userAnswers) {
            Question que = getById(questions, quizAnswer.getId());
            if (quizAnswer.getAnswer().equals(que.getCorrectAnswer())) {
                this.totalscore += que.getScore();
                correctAnswers++;
            } else {
                wrongAnswers++;
                helper.add(que);
            }
        }
        // Set all the parameters of the QuizResult
        double percentage = (double) correctAnswers / (correctAnswers + wrongAnswers) * 100;
        quizResult.setCorrectAnswers(correctAnswers);
        quizResult.setTotalscore(totalscore);
        quizResult.setWrongAnswers(wrongAnswers);
        quizResult.setPercentage((percentage)+ "%");
        if(helper.isEmpty()){
            quizResult.setWrong(null);
        }else {
            quizResult.setWrong(helper);
        }
        return quizResult;
    }
}
