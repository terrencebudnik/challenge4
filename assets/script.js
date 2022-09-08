var header = document.querySelector("header");
var startQuizbutton = document.getElementById("start");
var counterDiv = document.getElementById("time");
var mainBody = document.querySelector("section");
var quizBox = document.getElementById("quizBox");
var quizBoxquestions = document.getElementById("quizBoxquestions");
var quizBoxanswers = document.getElementById("quizBoxanswers");
var $answer1 = document.getElementById('answer-1')
var $answer2 = document.getElementById('answer-2')
var $answer3 = document.getElementById('answer-3')
var $answer4 = document.getElementById('answer-4')
var correctAnswer; 
var timer;
var countdown; 
var currentQuestion = 0;
var multipleChoice = document.getElementById("multipleChoice");
var scoreTracker= 0; 
// var correct = document.getElementById("correct");
// var incorrect = document.getElementById("incorrect"); 
var showScores = document.getElementById("showScores");
submitScores = document.getElementById("submitScores");
var fName;
var lName;

document.getElementById("highScorebutton").addEventListener ("click", function (){
    document.getElementById("scoresheet").style.display= "block"
}
)




var quizQuestions = [
{
    question: "1. What is Javascript?",
    options: {
        A: "Drink",
        B: "Food",
        C: "Coding language",
        D: "Machine"
    },
    correct: "Coding language"  
},
{
    question: "2. A function requires___",
    options: {
        A: "()",
        B: "<>",
        C: "**",
        D: "||"
    },
    correct: "()"
},
{   
    question: "3. What is DOM?",
    options: {
        A: "Drag Option Mover",
        B: "Document Object Model",
        C: "Do Over and Minimize",
        D: "Different Order Maker"
    },
    correct: "Document Object Model"
},
{
    question: "4. How do you link you Java file to the HTML",
    options: {
        A: "Create a function",
        B: "Copy and Paste",
        C: "It's done automatically",
        D: "Use <script src= </script>"
    },
    correct: "Use <script src= </script>"
},
{
    question: "5. Arrays start with ___",
    options: {
        A: "[0]",
        B: "[1]",
        C: "[A]",
        D: "[a]"
    },
    correct: "[0]"
}
]; 



startQuizbutton.addEventListener("click", function() {
    mainBody.style.display = "none";
    quizBox.style.display = "block";
    showQuestion1();
    countdown = 30;
    counterDiv.textContent = "Time Left: " + countdown;
    timer = setInterval(function() {
        countdown--;
        counterDiv.textContent = "Time Left: " + countdown
        if (countdown === 0) {
            clearInterval(timer);
            questionBody.style.display= "none";
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("highScores").style.display= "block"  
            

       }
       

    }, 1000)

})



function showQuestion1 () {
    // for (currentQuestion=0; currentQuestion < 6; currentQuestion++){     
    // }     

    quizBoxquestions.innerHTML = quizQuestions[0].question;
    $answer1.textContent = quizQuestions[0].options.A;
    $answer2.textContent = quizQuestions[0].options.B;
    $answer3.textContent = quizQuestions[0].options.C;
    $answer4.textContent = quizQuestions[0].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        //correctAnswer = quizQuestions[0].correctAnswer;
        if (target = quizQuestions[0].correct) {
            header.style.background = "green";
            scoreTracker += 1;
            showQuestion2();
            
        }
          else {
            header.style.background = "red"; 
            countdown-=2; 
            showQuestion2();

        }
    })     
 
    
      
}

function showQuestion2 () {
   
    
    quizBoxquestions.innerHTML = quizQuestions[1].question;
    $answer1.textContent = quizQuestions[1].options.A;
    $answer2.textContent = quizQuestions[1].options.B;
    $answer3.textContent = quizQuestions[1].options.C;
    $answer4.textContent = quizQuestions[1].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[1].correct) {
            header.style.background = "green";
            scoreTracker += 1;
            showQuestion3(); 
            
        }
          else {
            header.style.background = "red";
            countdown-=2; 
            showQuestion3(); 

        }
    })     
    
    
    
}


    
function showQuestion3 () {
   
    

    quizBoxquestions.innerHTML = quizQuestions[2].question;
    $answer1.textContent = quizQuestions[2].options.A;
    $answer2.textContent = quizQuestions[2].options.B;
    $answer3.textContent = quizQuestions[2].options.C;
    $answer4.textContent = quizQuestions[2].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[2].correct) {
            header.style.background = "green";
            scoreTracker += 1;
            showQuestion4();
            
        }
          else {
            header.style.background = "red";
            countdown-=2; 
            showQuestion4();
 

        }
    })     
    
   
}


function showQuestion4 () {
  
    
    quizBoxquestions.innerHTML = quizQuestions[3].question;
    $answer1.textContent = quizQuestions[3].options.A;
    $answer2.textContent = quizQuestions[3].options.B;
    $answer3.textContent = quizQuestions[3].options.C;
    $answer4.textContent = quizQuestions[3].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[3].correct) {
            header.style.background = "green";
            scoreTracker += 1;
            showQuestion5(); 
            
        }
          else {
            header.style.background = "red";
            countdown-=2; 
            showQuestion5(); 

        }
    })     
    
   
    
}

function showQuestion5 () {
   
    

    quizBoxquestions.innerHTML = quizQuestions[4].question;
    $answer1.textContent = quizQuestions[4].options.A;
    $answer2.textContent = quizQuestions[4].options.B;
    $answer3.textContent = quizQuestions[4].options.C;
    $answer4.textContent = quizQuestions[4].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[4].correct) {
            header.style.background = "green";
            scoreTracker += 1;
            quizBox.style.display = "none";
            clearInterval(timer);
    document.getElementById("gameOver").style.display = "block";
    showScores.innerHTML="Final Score: " +scoreTracker.value; 
    document.getElementById("highScores").style.display= "block";  
            
        }
          else {
            header.style.background = "red";
            clearInterval(timer);
            quizBox.style.display = "none";
            finalScore();
    
        }
    })     
    
   
}
   


function finalScore() {
    document.getElementById("gameOver").style.display = "block";
    showScores.innerHTML="Final Score: " + scoreTracker.value; 
    document.getElementById("highScores").style.display= "block"


}
    
function scores() {
   
    
    document.getElementById("scoresheet").style.display = "block";
   
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value; 
    
    document.getElementById("player-1").innerHTML = fName + "   " + lName + "              " + scoreTracker.toString(); 
    //document.getElementById("player-1").localStorage.setItem("player_one)", JSON.stringify(player_one)); 
    
    
    
}

// function renderPlayerNames(){
//     JSON.parse(localStorage.getItem("player_one"));
    
//     document.getElementById("player-1").innerHTML = fName + "   " + lName;
    
// }

// renderPlayerNames();

