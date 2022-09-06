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
var timer;
var countdown; 
var currentQuestion = 0;
var multipleChoice = document.querySelector("ul");
var scoreTracker= 0; 



var quizQuestions = [
{
    question: "1. What is Javascript?",
    options: {
        A: "Drink",
        B: "Food",
        C: "Coding language",
        D: "Machine"
    },
    correctAnswer: "Coding language"  
},
{
    question: "2. A function requires___",
    options: {
        A: "()",
        B: "<>",
        C: "**",
        D: "||"
    },
    correctAnswer: "()"
},
{   
    question: "3. What is DOM?",
    options: {
        A: "Option 1",
        B: "Option 2",
        C: "Option 3",
        D: "Option 4"
    },
    correctAnswer: "Option 2"
}
]; 



startQuizbutton.addEventListener("click", function() {
    mainBody.style.display = "none";
    quizBox.style.display = "block";
    showQuestion1();
    countdown = 60;
    counterDiv.textContent = "Time Left: " + countdown;
    timer = setInterval(function() {
        countdown--;
        counterDiv.textContent = "Time Left: " + countdown
        if (countdown === 0) {
            clearInterval(timer);
            

       }
       

    }, 1000)

})

function showQuestion1 () {
    // for (currentQuestion=0; currentQuestion < 4; currentQuestion++){     
    // }      
    

    quizBoxquestions.innerHTML = quizQuestions[0].question;
    $answer1.textContent = quizQuestions[0].options.A;
    $answer2.textContent = quizQuestions[0].options.B;
    $answer3.textContent = quizQuestions[0].options.C;
    $answer4.textContent = quizQuestions[0].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[0].correctAnswer) {
            header.style.background = "green";
            scoreTracker += 1;
            showQuestion2();
            
        }
          else {
            header.style.background = "red"; 
            countdown-15; 
            showQuestion2();

        }
    })     
 

    
}

function showQuestion2 () {
    // for (currentQuestion=0; currentQuestion < 4; currentQuestion++){     
    // }      
    
    
    quizBoxquestions.innerHTML = quizQuestions[1].question;
    $answer1.textContent = quizQuestions[1].options.A;
    $answer2.textContent = quizQuestions[1].options.B;
    $answer3.textContent = quizQuestions[1].options.C;
    $answer4.textContent = quizQuestions[1].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[1].correctAnswer) {
            header.style.background = "green";
            scoreTracker += 1;
            showQuestion3(); 
            
        }
          else {
            header.style.background = "red";
            countdown-15; 
            showQuestion3(); 

        }
    })     
    

    
}


    
function showQuestion3 () {
    // for (currentQuestion=0; currentQuestion < 4; currentQuestion++){     
    // }      
    

    quizBoxquestions.innerHTML = quizQuestions[2].question;
    $answer1.textContent = quizQuestions[2].options.A;
    $answer2.textContent = quizQuestions[2].options.B;
    $answer3.textContent = quizQuestions[2].options.C;
    $answer4.textContent = quizQuestions[2].options.D;
    
   multipleChoice.addEventListener('click', function(evt) {   
        var target = evt.target.value; 
        if (target = quizQuestions[2].correctAnswer) {
            header.style.background = "green";
            scoreTracker += 1;
            quizBox.style.display = "none";
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("highScores").style.display= "block"  
            
        }
          else {
            header.style.background = "red";
            countdown-15; 
            quizBox.style.display = "none";
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("highScores").style.display= "block"  

        }
    })     
    
   
}



    
    