// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//DEFINE GLOBAL VARIABLES
var startBtn = document.getElementById("start-button");
var timeLeft = document.getElementById("time");
var resetBtn = document.createElement("button")
var welcome = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var winScreen = document.getElementById("win-screen");
var scoreDisplay = document.getElementById("score");

var quizQuestion = document.getElementById("quiz-question");
var questionNumber = 0;
var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");

var score = 0;
var secondsLeft = "20";
var timerInterval = "";

//an array of objects containing questions, answers, and the correct answer for each.
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answersArray: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answersArray: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answersArray: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        question: "String values must be enclosed within ___ whwn being assigned to variables.",
        answersArray: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answersArray: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log",
    }
]

var highScores = [
    {
        name: "ARH",
        score: 10000000,
    }
];

// localStorage.setItem("scores", JSON.stringify(highScores));
// console.log(localStorage.getItem("scores"));

// var scoresFromStorage = JSON.parse(localStorage.getItem("scores"));
// console.log(scoresFromStorage);

//DEFINE FUNCTIONS
//
function startTimer() {
    //starts the timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft;
        //stops the timer at 0 seconds left
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        displayWinScreen();
        }
    }, 1000);
}

function nextQuestion() {
    questionNumber++;
    console.log(questionNumber);
    displayQuestion();
}

//displays the quiz questions and answers
function displayQuestion () { 
    quizQuestion.textContent = questions[questionNumber].question;
    answer1.textContent = "1. " + questions[questionNumber].answersArray[0];
    answer2.textContent = "2. " + questions[questionNumber].answersArray[1];
    answer3.textContent = "3. " + questions[questionNumber].answersArray[2];
    answer4.textContent = "4. " + questions[questionNumber].answersArray[3];
    quiz.style = "display: block";
}

//creates a button that can be used to reset to beginning
function resetWelcome() {
    resetBtn.textContent = "RESET";
    resetBtn.setAttribute("id", "reset-button");
    resetBtn.setAttribute("class","btn btn-info mt-4");
    //Appends button to reset div
    reset.append(resetBtn);
}

function displayWinScreen() {
    quiz.style = "display: none";
    scoreDisplay.textContent = "Score: " + score;
    winScreen.style = "display: block";
}
//CALL FUNCTIONS


//EVENT LISTENERS
//click start button to begin quiz
startBtn.addEventListener("click", function() {
    welcome.style = "display: none";
    startTimer();
    displayQuestion();
})

//click reset button to delete reset button and display the original welcome intro
resetBtn.addEventListener("click", function() {
    reset.removeChild(resetBtn);
    quiz.removeChild()
    welcome.style = "display: block";
})

answerBtn1.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "1. " + questions[questionNumber].correctAnswer) {
        score++;
        nextQuestion();
    } else {
    secondsLeft = secondsLeft - 15;
        console.log(secondsLeft);
        nextQuestion();
    }
    })

answerBtn2.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "2. " + questions[questionNumber].correctAnswer) {
        score++;
        nextQuestion();
    }
    else {
        secondsLeft = secondsLeft - 15;
        nextQuestion();
    }
    })

answerBtn3.addEventListener("click", function() {
    userChoice = event.target.textContent;
    console.log(userChoice);
    if (userChoice === "3. " + questions[questionNumber].correctAnswer) {
        score++;
        nextQuestion();
    }else {
        secondsLeft = secondsLeft - 15;
        nextQuestion();
    }
    })

answerBtn4.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "4. " + questions[questionNumber].correctAnswer) {
        score++;
        nextQuestion();
        
    }
    else {
        secondsLeft = secondsLeft - 15;
        nextQuestion();
    }
    })


// //STUFF FOR HOMEWORK
// var questions = [
//     {
//         question: "question",
//         answers: ["1", "2", "3", "4"],
//         correctAnswer: 4,
//     }
// ]
// for (var i = 0; i < questions.length; i++) {
//     if(i === questions[0].correctAnswer){
//         console.log("that answer is correct!");
//     }else{
//         console.log("That answer is wrong.");
//     }
// }
// //data attribute on the button
// //0 1 2 3
// //compare data attribute of button to correct answer