var startQuizbutton = document.getElementById("start");
var counterDiv = document.getElementById("time");
var mainBody = document.querySelector("section");
var quizContainer = document.getElementById("quiz");

var quizQuestions = [
{
    question: "What is Javascript?",
    options: {
        A: "A drink",
        B: "A food",
        C: "A coding language",
        D: "A machine"
    },
    correctAnswer: "A coding language"  
},
{
    question: "A function requires___",
    options: {
        A: "()",
        B: "<>",
        C: "**",
        D: "||"
    },
    correctAnswer: "()"
},
{   
    question: "What is DOM?",
    options: {
        A: "Option 1",
        B: "Option 2",
        C: "Option 3",
        D: "Option 4"
    },
    correctAnswer: "B"
}
]; 



startQuizbutton.addEventListener("click", function() {
   showQuestion();
    var countdown = 5;
    counterDiv.textContent = "Time Left: " + countdown;
    var timer = setInterval(function() {
        countdown--;
        counterDiv.textContent = "Time Left: " + countdown
        if (countdown === 0) {
            clearInterval(timer);
       }
       

    }, 1000)

})

function showQuestion () {
    var output = [];
    quizQuestions.forEach(currentQuestion, questionNumber) => {
        var answers = [];
        for(letter in currentQuestion.options){
            answers.push(
                <label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>
            );
        }
        output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );
    }

);

quizContainer.innerHTML = output.join('');

}
    
    
    
    