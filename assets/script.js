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

var quizQuestion = document.getElementById("quiz-question");
var questionNumber = 0;
var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");

var secondsLeft = "3";
var timerInterval = "";

//an array of objects containing questions, answers, and the correct answer for each.
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answersArray: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: 3,
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answersArray: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answersArray: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: 4,
    },
    {
        question: "String values must be enclosed within ___ whwn being assigned to variables.",
        answersArray: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answersArray: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: 4,
    }
]

var highScores = [
    {
        name: "ARH",
        score: 10000000,
    }
];

localStorage.setItem("scores", JSON.stringify(highScores));
console.log(localStorage.getItem("scores"));

var scoresFromStorage = JSON.parse(localStorage.getItem("scores"));
console.log(scoresFromStorage);

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
        }
    }, 1000);
}

function nextQuestion() {
    questionNumber ++;
}

//displays the quiz questions and answers
function displayQuestion () {
    quizQuestion.textContent = questions[0].question;
    answer1.textContent = questions[questionNumber].answersArray[0];
    answer2.textContent = questions[questionNumber].answersArray[1];
    answer3.textContent = questions[questionNumber].answersArray[2];
    answer4.textContent = questions[questionNumber].answersArray[3];
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