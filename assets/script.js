var header = document.querySelector("#header");
var startQuizbutton = document.querySelector("#start");
var counterDiv = document.querySelector("#time");
var mainBody = document.querySelector("section");
var quizBox = document.querySelector("#quizBox"); 
var scoreTracker = 0;
var initials;
var timer;
var countdown;

var quizQuestions = [
    {
        main: "What is Javascript?",
        options: ["Drink", "Food", "Coding language", "A machine"],
        correct: "Coding language"
    },

    {
        main: "A function requires___",
        options: ["()", "<>", "**", "||"],
        correct: "()"
    },

    {
        main: "What is DOM",
        options: ["Drag Option Mover", "Document Object Model", "Do Over and Minimize", "Different Order Maker"],
        correct: "DOcument Object Model"
    },

    {
        main: "How do you link you Java file to the HTML",
        options: ["Create a function", "Copy and Paste", "It's done automatically", "Use <script src= </script>"],
        correct: "Use <script src= </script>"
    },

    {
        main: "Arrays start with ___",
        options: ["[0]", "[1]", "[A]", "[a]"],
        correct: "[0]"
    }];


function viewScores() {

        var scoreSheet = document.querySelector("#scoreSheet"); 
        scoreSheet.style.display= "block"; 
        
        var playerList = document.querySelector("#playerList");
        var initials = localStorage.getItem("initials");
        var score = localStorage.getItem("score");
        playerList.textContent= initials + " - " + score;
       
        }
       
function results() {
          
           clearInterval(timer);  
            
            document.querySelector("#gameOver").style.display = "block";         
            document.querySelector("#showScores").style.display ="block";
            document.querySelector("#showScores").textContent = "Final Score:" + scoreTracker; 
            
            document.querySelector("#nameInput").style.display = "block";
         
            
            document.querySelector("#submitScores").addEventListener("click", function(){
                var scoreSheet = document.querySelector("#scoreSheet"); 
                scoreSheet.style.display= "block"; 
                var initials = document.querySelector("#initials").value;
                localStorage.setItem("initials", initials);
                localStorage.setItem("score", scoreTracker);
                viewScores();  
            })

         }

document.querySelector("#highscores").addEventListener("click", function() {
    viewScores(); 
})

function startQuiz() {
startQuizbutton.addEventListener("click", function () {
    mainBody.style.display = "none";
    showQuestion1();
    countdown = 60;
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
    return timer(); 
})

}

function showQuestion1() {
   
    
    quizBox.style.display = "block";

    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[0].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);


    for (x = 0; x < 4; x++) {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", "questionButton"); 
        questionButton.textContent= quizQuestions[0].options[x];
        quizBox.appendChild(questionButton);
        
        questionButton.addEventListener("click", function(e) {
            if (e.target.textContent === quizQuestions[0].correct) {
                scoreTracker+=1; 
           
            } else { 
                timer= timer - 2; 
            }
                quizBox.innerHTML = "";  
                showQuestion2();
   
            
        })
    }
   return scoreTracker;   
} 


   
function showQuestion2() {
   
    
 

    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[1].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);


    for (x = 0; x < 4; x++) {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", "questionButton"); 
        questionButton.textContent= quizQuestions[1].options[x];
        quizBox.appendChild(questionButton);
        
        questionButton.addEventListener("click", function(e) {
            if (e.target.textContent === quizQuestions[1].correct) {
                scoreTracker+=1; 
           
            } else { 
                timer= timer - 2; 
            }
                quizBox.innerHTML = "";
                showQuestion3()  
            
        })
    }
    return scoreTracker;
}

function showQuestion3() {
   
    
    quizBox.style.display = "block";

    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[2].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);


    for (x = 0; x < 4; x++) {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", "questionButton"); 
        questionButton.textContent= quizQuestions[2].options[x];
        quizBox.appendChild(questionButton);
        
        questionButton.addEventListener("click", function(e) {
            if (e.target.textContent === quizQuestions[2].correct) {
                scoreTracker+=1; 
           
            } else { 
                timer= timer - 2; 
            }
            quizBox.innerHTML = "";
            showQuestion4()  
        
            
        })
    }
    return scoreTracker;
}

function showQuestion4() {
   
    
    quizBox.style.display = "block";

    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[3].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);


    for (x = 0; x < 4; x++) {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", "questionButton"); 
        questionButton.textContent= quizQuestions[3].options[x];
        quizBox.appendChild(questionButton);
        
        questionButton.addEventListener("click", function(e) {
            if (e.target.textContent === quizQuestions[3].correct) {
                scoreTracker+=1; 
           
            } else { 
                timer= timer - 2; 
            }
            quizBox.innerHTML = "";
            showQuestion5()  
        
        })
    }
    return scoreTracker;
}

function showQuestion5() {
   
    
    quizBox.style.display = "block";

    var quizBoxquestions = document.createElement("h2");
    quizBoxquestions.textContent = quizQuestions[4].main;
    quizBoxquestions.setAttribute("id", "quizBoxquestions");
    quizBox.appendChild(quizBoxquestions);


    for (x = 0; x < 4; x++) {
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", "questionButton"); 
        questionButton.textContent= quizQuestions[4].options[x];
        quizBox.appendChild(questionButton);
        
        questionButton.addEventListener("click", function(e) {
            if (e.target.textContent === quizQuestions[4].correct) {
                scoreTracker+=1; 
           
            } else { 
                timer= timer - 2; 
            }
            quizBox.style.display = "none";
            results() ;
        
        })
    }
    return scoreTracker;
}

startQuiz(); 

