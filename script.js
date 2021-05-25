var startButton = document.querySelector(".start-button ");
var timerElemet = document.querySelector(".timer-count");

var timerCount;
var highScore;
var correct;
var wrong;
var questions = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var index = 0;



function startQuiz() {
  timerCount = 50;

}

// building questions and answers
const quizQuestions = [
    {
       question: "How do call a funcion named myFunction?",
       answers: [
            "myfunction",
            "myFunction()",
            "Call myFunction()",
       ],
       correct: "myFunction()",
       
    },
    {
        question: "What is the correct way to write a For loop?",
        answers: {
            a: "for (i <= 5; i++)",
            b: "For i =0, i => 10: i+",
            c: "for (i = 0; i <= 5; i++)",
        },
        correct: "c",
        wrong: "a",
        wrong: "b",
     },
     {
        question: "Which tag contains all of the website's visible content",
        answers: {
            a: "<title>",
            b: "<head>",
            c: "<body>",
        },
        correct: "c",
        wrong: "a",
        wrong: "b",
     },
     {
        question: "How do you insert a comment in a CSS file",
        answers: {
            a: "/ this is a comment /",
            b: "// this is a comment //",
            c: "// this is a comment",
        },
        correct: "a",
        wrong: "b",
        wrong: "c",
     },
     {
        question: "Arrays are used to store what?",
        answers: {
            a: "Arrays are used to store functions",
            b: "JavaScript arrays are used to store multiple values in a single variable",
            c: "Arrays can be used to store containers from variables ",
        },
        correct: "b",
        wrong: "c",
        wrong: "a",
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

// Timer function/ additional decrement of time for wrong answers
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
function quizOver() {
  clearInterval(timerCount)
  questions.setAttribute("class","hide")
  var endScreen = document.querySelector(".wrapper")
  endScreen.removeAttribute("class")
}