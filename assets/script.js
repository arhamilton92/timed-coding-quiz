
//DEFINE GLOBAL VARIABLES
var startBtn = document.getElementById("start-button");
var timeLeft = document.getElementById("time");
var resetBtn = document.createElement("button")
var welcome = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var winScreen = document.getElementById("win-screen");
var scoreDisplay = document.getElementById("score");
var highScore = document.getElementById("high-scores");
var enterInitials = document.getElementById("enter-initials")
var initialText = "";

var quizQuestion = document.getElementById("quiz-question");
var questionNumber = 0;
var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");

var score = 0;
var secondsLeft = "60";
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
        answersArray: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correctAnswer: "console log",
    },
]

//DEFINE FUNCTIONS
// starts countdown
function startTimer() {
    //starts the timer
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time: " + secondsLeft;
        //stops the timer at 0 seconds left
        if(secondsLeft < 1 ) {
        clearInterval(timerInterval);
        displayWinScreen();
        }
    }, 1000);
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

//displays the final score and quiz complete screen
function displayWinScreen() {
    //removes quiz content
    quiz.style = "display: none";
    //displays final score
    scoreDisplay.textContent = "Score: " + score + "/5";
    //displays quiz complete screen
    winScreen.style = "display: block";
    resetWelcome();
}

//creates a button that can be used to reset to beginning
function resetWelcome() {
    resetBtn.textContent = "RESET";
    resetBtn.setAttribute("id", "reset-button");
    resetBtn.setAttribute("class","btn btn-info mt-4");
    //Appends button to reset div
    reset.append(resetBtn);
    secondsLeft = 60;
    questionNumber = 0;
    score = 0;
}

//CALL FUNCTIONS


//EVENT LISTENERS

//click start button to begin quiz
startBtn.addEventListener("click", function() {
    // removes welcome screen so quiz questions can display
    welcome.style = "display: none";
    startTimer();
    displayQuestion();
})

//click reset button to delete reset button and display the original welcome intro so you can retake the quiz.
resetBtn.addEventListener("click", function() {
    // removes reset button
    reset.removeChild(resetBtn);
    // removes win screen, quiz, highscore displays
    winScreen.style = "display: none";
    quiz.style = "display: none";
    highScore.style = "display: none";
    // displays welcome screen
    welcome.style = "display: block";
    //resets timer display
    timeLeft.textContent = "Time: 60";
})

//NEVER GOT THIS TO WORK.
// enterInitials.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log("you submitted!");
// })


//I didn't want to have four seperate listeners for this. But I couldn't target multiple classes/id's for one button without it breaking. So I don't know how else to do it :(
//event listeners for answer buttons
answerBtn1.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "1. " + questions[questionNumber].correctAnswer) {
        score++;
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
            questionNumber++;
            displayQuestion();
            console.log(questionNumber)
        }
    }
    else {
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
        secondsLeft = secondsLeft - 15;
        questionNumber++;
        displayQuestion();
        }
    }
    })

answerBtn2.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "2. " + questions[questionNumber].correctAnswer) {
        score++;
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
            questionNumber++;
            displayQuestion();
        }
    }
    else {
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
        secondsLeft = secondsLeft - 15;
        questionNumber++;
        displayQuestion();
        }
    }
    })

answerBtn3.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "3. " + questions[questionNumber].correctAnswer) {
        score++;
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
            questionNumber++;
            displayQuestion();
        }
    }
    else {
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
        secondsLeft = secondsLeft - 15;
        questionNumber++;
        displayQuestion();
        }
    }
    })

answerBtn4.addEventListener("click", function() {
    userChoice = event.target.textContent;
    if (userChoice === "4. " + questions[questionNumber].correctAnswer) {
        score++;
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
            questionNumber++;
            displayQuestion();
        }
    }
    else {
        if (questionNumber === 4){
            displayWinScreen();
        }
        else {
        secondsLeft = secondsLeft - 15;
        questionNumber++;
        displayQuestion();
        }
    }
    })
