var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".time");
var timer;
var timerCount=50;
var highScore;
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var index = 0;


var startTimer = function() {
timerElement.addEventListener("timer-event", startTimer);

  // put timer count on the page visually
  timerElement.textContent = timerCount;
  var timer = setInterval(function() {
   timerCount--;
   timerElement.textContent = timerCount;

   // check on time left
   // check if questions remaining
    if (timerCount > 0) {
     // play next question
    } else {

    }
    if (quizOver);
    clearInterval(timer);
    
  }, 1000);
};

// starts game
var startGame = function() {
  // starts timer
  startTimer();
  // play first question
  getQuestions();
  // doWhateverElseYouNeedAtStart();
}

// hook up the startGame function to the startButton button
startButton.addEventListener('click', startGame);

function getQuestions() {
  var currentQuestion = quizQuestions[index];
  questions.textContent = currentQuestion.question
  answers.innerHTML = "answers"
  currentQuestion.answers.forEach(function(choice, i){
    var choiceBtn = document.createElement("button")
    choiceBtn.setAttribute("class", "choice")
    choiceBtn.setAttribute("value", choice)
    choiceBtn.textContent = i + 1 + ": " + choice 
    answers.appendChild(choiceBtn)
    choiceBtn.onclick = verifyAnswer
  })
}

// building questions and answers
const quizQuestions = [ 
    {

       question: "How would you call a funcion named myFunction?",
       answers: [
            "myfunction",
            "myFunction()",
            "Call myFunction()",
        ],
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
        correct: "//this is a comment",
        
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
/**
 * Needs to:
 * - Stop Timer
 * - Tally Score and update it in localStorage
 * - Reset data like timer to 50 and index to 0
 * - Start the High Score Flow (collect name, add score to list, show list)
 * - window.location.href('highScoresPage.html');
 */

function quizOver() {
  // stops timer
  clearInterval(timerCount);
  // hides questions element
  questions.setAttribute("class", "hide");
  // to change page location

  window.location.href= ('highScoresPage.html');
  var endScreen = document.querySelector('.wrapper')
  // remove class names from endScreen
  endScreen.removeAttribute("class")

  // reset index variable to 0
}
// creating scores 
function scoreQuiz(answers, questions) {
  var score = (answers/questions) * 100;
  return score;

}