var header = document.querySelector("#header");
var startQuizbutton = document.querySelector("#start");
var counterDiv = document.querySelector("#time");
var mainBody = document.querySelector("section");
var quizBoxanswers = document.querySelector("#quizBoxanswers");
var timer;
var countdown;
var qIndex = 0;
var scoreTracker = 0;
var showScores = document.getElementById("showScores");
var submitScores = document.getElementById("submitScores");


var quizQuestions = [
    {
        main: "What is Javascript?",
        options: ["Drink", "Food", "Coding language", "A machine"],
        correct: "Coding language"
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


function showQuestion() {

    var quizBox = document.createElement("div");
    quizBox.setAttribute("id", "quizBox")
    document.body.appendChild(quizBox);


    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[qIndex].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);

    var quizBoxanswers = document.createElement("ul");

    quizBoxanswers.setAttribute("id", "quizBoxanswers");
    quizBoxquestions.appendChild(quizBoxanswers);

    for (x = 0; x < 4; x++) {
        var listItem = document.createElement("li");
        quizBoxanswers.appendChild(listItem);
        var questionButton = document.createElement("button");
        questionButton.textContent = quizQuestions[qIndex].options[x];
        listItem.appendChild(questionButton);
        
    }   

    

    quizBoxanswers.addEventListener("click", function () {
        quizBox.style.display = "none";
        if (this == quizQuestions[qIndex].correct) {
            header.style.display = "green";
        }
        qIndex +=1;

        if (qIndex < quizQuestions.length){
            showQuestion();
        } else {
            clearInterval(timer);
            quizBox.style.display = "none";
            results(); 
        }
   
    })

}   

startQuizbutton.addEventListener("click", function () {
    mainBody.style.display = "none";
    showQuestion();
    countdown = 30;
    counterDiv.textContent = "Time Left: " + countdown;
    timer = setInterval(function () {
        countdown;
        counterDiv.textContent = "Time Left: " + countdown
        if (countdown === 0) {
            clearInterval(timer);
            quizBox.style.display = "none";
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("highScores").style.display = "block"

        }

    }, 1000)

})
     
function results() {
    document.getElementById("gameOver").style.display = "block";         
    document.getElementById("highScores").style.display = "block";
    var playerName = document.getElementById("player-name")
    localStorage.setItem("playerName,", )
   




}


// /* <p>Saved name is:</p>
// <p id="demo"></p>

// <script>
// // Set Item
// localStorage.setItem("lastname", "Smith"); */}