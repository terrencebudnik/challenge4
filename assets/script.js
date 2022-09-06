var startQuizbutton = document.getElementById("start");
var counterDiv = document.getElementById("time");
var mainBody = document.querySelector("section");
var question1 = {
    question: "What is Javascript?",
    options: ["A drink", "A food", "A coding language", "A machine"],
    correctAnswer: "A coding language"  
}
var question2 = {
    question: "A function requires____",
    options: ["()", "<>", "**", "||"],
    correctAnswer: "()"
};




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
    
  
    var div = document.createElement("div");
    div.innerHTML = question1.question; 
    document.body.appendChild(div); 
    
    var list = document.createElement("ol");
    div.appendChild(list);
    
    var choice1 = document.createElement("li");
    choice1.innerHTML = question1.options[0];   
    list.appendChild(choice1);
    
    var choice2 = document.createElement("li");
    choice2.innerHTML = question1.options[1];
    list.appendChild(choice2);
    
    var choice3 = document.createElement("li");
    choice3.innerHTML = question1.options[2];
    list.appendChild(choice3);
    
    var choice4 = document.createElement("li");
    choice4.innerHTML = question1.options[3];
    list.appendChild(choice4);

  

    

    var nextButton = document.createElement("button");
    nextButton.textContent = "Next Question"; 
    div.appendChild(nextButton); 

    

}   
    
//     nextButton.addEventListener("click", function() {
//     var div = document.createElement("div");
//     div.innerHTML = question2.question; 
    
    
    
//     document.body.appendChild(div); 
    
//     var list = document.createElement("ol");
//     div.appendChild(list);
    
//     var choice1 = document.createElement("li");
//     choice1.innerHTML = question2.options[0];   
//     list.appendChild(choice1);
    
//     var choice2 = document.createElement("li");
//     choice2.innerHTML = question2.options[1];
//     list.appendChild(choice2);
    
//     var choice3 = document.createElement("li");
//     choice3.innerHTML = question2.options[2];
//     list.appendChild(choice3);
    
//     var choice4 = document.createElement("li");
//     choice4.innerHTML = question2.options[3];
//     list.appendChild(choice4);

//     var nextButton = document.createElement("button");
//     nextButton.textContent = "Next Question"; 
//     div.appendChild(nextButton); 

//     })
// } 
    






 





