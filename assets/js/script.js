var qContainerEl = document.querySelector("#q-container");
var startButtonEl = document.querySelector("#start-btn");
var mainTextEl = document.querySelector("#main-text");
var subTextEl = document.querySelector("#sub-text");
var countdownTimer = document.querySelector("#timer");
var answerButtons = document.querySelector("#answer-buttons");
var setIntervalId;
var i =0;

var questions = [
    {q: 'How does a for loop start?', a: [
        {text:"1. for (i = 0; i < 5; i++)"},
        {text:"2. for (i < 5; i++)"},
        {text:"3. for (i = 0; i < 5)"},
        {text:"4. for i = 1 to 5"}
    
    ]},
    {q: "Inside which HTML element do we put the Javascript?", a: [
        {text:"1. <script>"},
        {text:"2. <javascript>"},
        {text:"3. <scripting>"},
        {text:"4. <js>"}
    ]}
]

var time = questions.length * 15

// start screen

function startQuiz() {
console.log('Start!')
startButtonEl.classList.add("hide");
subTextEl.classList.add("hide");
setIntervalId = setInterval(countdownStart, 1000);

}
// questions screen

function countdownStart(){
    time--;
    countdownTimer.textContent= time;
    if (time === 0) {
        clearInterval(setIntervalId);
       
    }
    //case 1 - idle //30%15===0 i++
    //case 2 - correct - i++ no penalty
    //case 3 - incorrect -i++ substract 10
    
}
function setNextQuestion() {
mainTextEl.textContent = " ";
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