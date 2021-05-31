var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".time");

var timerCount=60;
var highScore;
var correct;
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var index = 0;
var timer;
 



var startTimer = function() {
  timerElement.addEventListener("timer-event", startTimer);
  console.log(timerCount);
  // put timer count on the page visually
  timerElement.textContent = timerCount;
  timer = setInterval(function() {
   timerCount--;
   timerElement.textContent = timerCount;
    if (timerCount > 0) {
      // Play next question, Game continues
    } else {
      quizOver();
    
    } if (highScore && timerCount > 0) {
        clearInterval(timer);
    }
    
  }, 1000);
};

var startGame = function() {
  startTimer();
  getQuestions();
  //get answers to appear  
  // doWhateverElseYouNeedAtStart();
}

startButton.addEventListener('click', startGame);

function getQuestions() {
  var currentQuestion = quizQuestions[index];
  questions.textContent = currentQuestion.question
  answers.innerHTML = ""
  currentQuestion.answers.forEach(function(choice, i){
    var choiceBtn = document.createElement("button")
    choiceBtn.setAttribute("class", "answers")
    choiceBtn.setAttribute("value", choice)
    choiceBtn.textContent = i + 1 + ": " + choice 
    answers.appendChild(choiceBtn)
    choiceBtn.onclick = verifyAnswer;
  })
}

// building questions and answers
const quizQuestions = [
    {
       question: "How do call a funcion named myFunction?",
       answers: ["myfunction", "myFunction()", "Call myFunction()"],
        correct: "myFunction()",
    },    
    {
        question: "What is the correct way to write a For loop?",
        answers: [
              "for (i <= 5; i++)",
              "For i =0, i => 10: i+",
              "for (i = 0; i <= 5; i++)",
        ],
        correct: "for (i = 0; i <= 5; i++)",
     },
     {
        question: "Which tag contains all of the website's visible content",
        answers: [
              "<title>",
              "<head>",
              "<body>",
        ],
        correct: "<body>",
        
     },
     {
        question: "How do you insert a comment in a CSS file",
        answers: [
              "/ this is a comment /",
              "// this is a comment //",
              "// this is a comment",
        ],
        correct: "this is a comment",
        
     },
     {
        question: "Arrays are used to store what?",
        answers: [
              "Arrays are used to store functions",
              "JavaScript arrays are used to store multiple values in a single variable",
              "Arrays can be used to store containers from variables ",
        ],
        correct: "JavaScript arrays are used to store multiple values in a single variable",
        
     },
    
];


// verify selected answer
function verifyAnswer() {
  // if clicked button's 'value' attr does not match correct answer
  if (this.value !== quizQuestions[index].correct) {
    // cut off 2 seconds from time
    timerCount -= 2;
  }

  // increment index by 1
  index++;

  // if index matches length of questions array
  if (index === quizQuestions.length) {
    // end quiz
    quizOver(); 
  } else {
    // get next question
    getQuestions();
  }
}

// ends quiz
function quizOver() {
  // stops timer
  clearInterval(timerCount);
  // hides questions element
  questions.setAttribute("class", "hide");
  // to change page location
  // window.location.href('highScoresPage.html');

  var endScreen = document.querySelector(".wrapper")
  // remove class names from endScreen
  endScreen.removeAttribute("class")

  // reset index variable to 0
}