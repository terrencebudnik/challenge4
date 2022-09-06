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
var currentQuestion = 0;



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
    showQuestion();
    var countdown = 20;
    counterDiv.textContent = "Time Left: " + countdown;
    timer = setInterval(function() {
        countdown--;
        counterDiv.textContent = "Time Left: " + countdown
        if (countdown === 0) {
            clearInterval(timer);
       }
       

    }, 1000)

})

function showQuestion () {
    
    // var nextButton = document.createElement("button");
    // nextButton.textContent = "Next Question"; 
    // quizBox.appendChild(nextButton); 
    
    
    quizBoxquestions.innerHTML = quizQuestions[currentQuestion].question;
    $answer1.textContent = quizQuestions[currentQuestion].options.A;
    $answer2.textContent = quizQuestions[currentQuestion].options.B;
    $answer3.textContent = quizQuestions[currentQuestion].options.C;
    $answer4.textContent = quizQuestions[currentQuestion].options.D;
    
    // var answers = [];
    // answers[0]=(quizQuestions[0].options.A); 
    // answers[1]=(quizQuestions[0].options.B); 
    // answers[2]=(quizQuestions[0].options.C); 
    // answers[3]=(quizQuestions[0].options.D); 

   
    // quizBoxanswers.innerHTML = answers.join("    "); 


    
    
    
    
}

  
    
    


    
    