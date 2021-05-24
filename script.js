// setting up variables
var startButton = document.querySelector(".start-button ");
var timerElemet = document.querySelector(".timer-count");






function startGame() {


}

// building questions and answers
const quizQuestions = [
    {
       question: "How do call a funcion named myFunction?",
       answers: {
           a: "myfunction",
           b: "myFunction()",
           c: "Call myFunction()",
       },
       correctAnswer: "b"
    },
    {
        question: "What is the correct way to start a For loop?",
        answers: {
            a: "for (i <= 5; i++)",
            b: "For i =0, i => 10: i+",
            c: "for (i = 0; i <= 5; i++)",
        },
        correctAnswer: "c"
     },
     {
        question: "Which tag contains all of the website's visible content",
        answers: {
            a: "<title>",
            b: "<head>",
            c: "<body>",
        },
        correctAnswer: "c"
     },
     {
        question: "How do you insert a comment in a CSS file",
        answers: {
            a: "/ this is a comment /",
            b: "// this is a comment //",
            c: "// this is a comment",
        },
        correctAnswer: "a"
     },
     {
        question: "Arrays are used to store what?",
        answers: {
            a: "Arrays are used to store functions",
            b: "JavaScript arrays are used to store multiple values in a single variable",
            c: "Arrays can be used to store containers from variables ",
        },
        correctAnswer: "b"
     },
    
];
