var header = document.querySelector("#header");
var startQuizbutton = document.querySelector("#start");
var counterDiv = document.querySelector("#time");
var mainBody = document.querySelector("section");
var timer;
var countdown;
var quizBox = document.querySelector("#quizBox"); 
var qIndex = 0;
var scoreTracker = 0;

var quizQuestions = [
    {
        main: "What is Javascript?",
        options: ["Drink", "Food", "Coding language", "A machine"],
        correct: "Coding Language"
    },

    {
        main: "A function requires___",
        options: ["()", "<>", "**", "||"],
        correct: 2
    },

    {
        main: "A What is DOM",
        options: ["Drag Option Mover", "Document Object Model", "Do Over and Minimize", "Different Order Maker"],
        correct: 2
    },

    {
        main: "How do you link you Java file to the HTML",
        options: ["Create a function", "Copy and Paste", "It's done automatically", "Use <script src= </script>"],
        correct: 2
    },

    {
        main: "Arrays start with ___",
        options: ["[0]", "[1]", "[A]", "[a]"],
        correct: 1
    }];

function startQuiz() {
startQuizbutton.addEventListener("click", function () {
    mainBody.style.display = "none";
    showQuestion();
    countdown = 10;
    counterDiv.textContent = "Time Left: " + countdown;
    timer = setInterval(function () {
        countdown--;
        counterDiv.textContent = "Time Left: " + countdown
        if (countdown === 0) {
            clearInterval(timer);
            quizBox.style.display = "none";
            results(); 

        }

    }, 1000)

})

}

function showQuestion() {

    quizBox.style.display = "block";

    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[qIndex].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);

    showAnswers(); 
    
}   

function showAnswers () {
    for (x = 0; x < 4; x++) {
        var questionButton = document.createElement("button");
        questionButton.textContent = quizQuestions[qIndex].options[x];
        quizBox.appendChild(questionButton);
        questionButton.setAttribute("id", "questionButton"); 
        
        // questionButton.addEventListener("click", function(event){
        // })

    }
}

function results() {
    var scoreSheet = document.querySelector("#scoreSheet"); 
    var playerList = document.querySelector("playerList"); 
    
    document.querySelector("#gameOver").style.display = "block";         
    document.querySelector("#enterPlayerName").style.display = "block";



    document.querySelector("#enterPlayerName").addEventListener("submit", function(){
        // var initials = document.querySelector("initials");
        // window.localStorage.setItem('player-name', JSON.stringify(initials));

      document.querySelector("#scoreSheet").style.display= "block";
        // playerList.textContent= window.localStorage.getItem('player-name'); 


        
        
    })
    
}

startQuiz(); 

