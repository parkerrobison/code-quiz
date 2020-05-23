var qContainerEl = document.querySelector("#q-container");
var startButtonEl = document.querySelector("#start-btn");
var mainTextEl = document.querySelector("#main-text");
var subTextEl = document.querySelector("#sub-text");
var countdownTimerEl = document.querySelector("#timer");
var answerButtonsEl = document.querySelector("#answer-buttons");
var setIntervalId;
var i =0;

var questions = [
    {q: 'How does a for loop start?', a: [
        {text:"1. for (i = 0; i < 5; i++)", correct: true },
        {text:"2. for (i < 5; i++)", correct: false},
        {text:"3. for (i = 0; i < 5)", correct: false},
        {text:"4. for i = 1 to 5", correct: false}
    
    ]},
    {q: "Inside which HTML element do we put the Javascript?", a: [
        {text:"1. <script>", correct: true},
        {text:"2. <javascript>", correct: false},
        {text:"3. <scripting>", correct: false},
        {text:"4. <js>", correct: false}
    ]},
    {q: "What is the purpose of the <body> element?", a: [
        {text: "1. The body element connects to the head element.", correct: false},
        {text: "2. The body contains all of the content of webpage.", correct: true},
        {text: "3. The body element will remain an empty placeholder.", correct: false},
        {text: "4. The body element is where all of the metadata is stored.", correct: false}
    ]},
]


var time = questions.length * 15

// start screen

function startQuiz() {
startButtonEl.classList.add("hide");
subTextEl.classList.add("hide");
setIntervalId = setInterval(countdownStart, 1000);

answerButtonsEl.classList.remove("hide");
}
// questions screen

function countdownStart(){
    time--;
    countdownTimerEl.textContent= time;
    if (time === 0) {
        clearInterval(setIntervalId);
    }
    //case 1 - idle //30%15===0 i++
    //case 2 - correct - i++ no penalty
    //case 3 - incorrect -i++ substract 10
    displayQuestion()
}

function displayQuestion() {
    document.getElementById("main-text").innerHTML = questions[q[i]];
}

// end screen
function quizEnd() {

}

//startButtonEl.classList.remove("hide");

startButtonEl.addEventListener('click', startQuiz)

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score