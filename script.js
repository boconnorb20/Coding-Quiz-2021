var startButton = document.querySelector(".start-button ");
var timerElemet = document.querySelector(".timer-count");

var timerCount;
var highScore;
var correct;
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var index = 0;



function startQuiz() {
  timerCount = 50;


}

function startTimer() {
  timer = setInterval(function() {
  timerCount--;
  timerElement.quizQuestions = timerCount;
    if (timerCount >= 0) {
     // NEED TO FIGURE THIS OUT
    } else if (wrong && timerCount --- 2) {

    } if (highScore && timerCount > 0) {
          clearInterval(timer);
    }
      if (timerCount === 0) {
        clearInterval(timer);
    }
  }, 50000);
};

// building questions and answers
const quizQuestions = [
    {
       question: "How do call a funcion named myFunction?",
       choices: [
            "myfunction",
            "myFunction()",
            "Call myFunction()",
        ],
        correct: "myFunction()",
       
    },
    {
        question: "What is the correct way to write a For loop?",
        choices: [
              "for (i <= 5; i++)",
              "For i =0, i => 10: i+",
              "for (i = 0; i <= 5; i++)",
        ],
        correct: "for (i = 0; i <= 5; i++)",
     },
     {
        question: "Which tag contains all of the website's visible content",
        choices: [
              "<title>",
              "<head>",
              "<body>",
        ],
        correct: "<body>",
        
     },
     {
        question: "How do you insert a comment in a CSS file",
        choices: [
              "/ this is a comment /",
              "// this is a comment //",
              "// this is a comment",
        ],
        correct: "this is a comment",
        
     },
     {
        question: "Arrays are used to store what?",
        choices: [
              "Arrays are used to store functions",
              "JavaScript arrays are used to store multiple values in a single variable",
              "Arrays can be used to store containers from variables ",
        ],
        correct: "JavaScript arrays are used to store multiple values in a single variable",
        
     },
    
];
function getQuestions() {
  var currentQuestion = quizQuestions [index];
  questions.textContent = currentQuestion.question
  choices.innerHTML = ""
  currentQuestion.answers.forEach(function(choice,i){
    var choiceBtn = document.createElement("button")
    choiceBtn.setAttribute("class","choice")
    choiceBtn.setAttribute("value",choice)
    choiceBtn.textContent = i + 1 + "" + choice 
    choices.appendChild(choiceBtn)
    choiceBtn.onclick = verifyAnswer
  })
}

function verifyAnswer() {
  if (this.value !== quizQuestions [index].correct) {
    timerCount -= 2
  }
  index ++
  if (index === quizQuestions.length) {
    quizOver () 

  }
  else {
    getQuestions()
  }
}


function quizOver() {
  clearInterval(timerCount)
  questions.setAttribute("class","hide")
  var endScreen = document.querySelector(".wrapper")
  endScreen.removeAttribute("class")
}