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

var startBtn = document.getElementById("start-button");
var timeLeft = document.getElementById("time");
var secondsLeft = "60";

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answersArray: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3. alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answersArray: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "3. parentheses",
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answersArray: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "4. all of the above",
    }
    {
        question: "String values must be enclosed within ___ whwn being assigned to variables.",
        answersArray: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "3. quotes",
    }
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answersArray: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "4. console.log",
    }
]

//function 
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft;
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        }
    }, 1000);
};

startBtn.addEventListener("click", function() {
    startTimer();
    });
