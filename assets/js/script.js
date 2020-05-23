var qContainerEl = document.querySelector("#q-container");
var startButtonEl = document.querySelector("#start-btn");
var mainTextEl = document.querySelector("#main-text");
var subTextEl = document.querySelector("#sub-text");
var countdownTimer = document.querySelector("#timer");
var answerButtons = document.querySelector("#answer-buttons");

var questions = [
    {q: 'How does a for loop start?', a: [
        {text:"1. for (i = 0; i < 5; i++)"},
        {text:"2. for for (i < 5; i++)"},
        {text:"3. for (i = 0; i < 5)"},
        {text:"4. for i = 1 to 5"}
    
    ]}
]

// start screen

function startQuiz() {
console.log('Start!')
setNextQuestion()
}
// questions screen

function countdownStart(){

}
function setNextQuestion() {

}

// end screen




// inside which HTML element do we put the Javascript?
// <script>
// <javascript>
// <scripting>
// <js>

startButtonEl.addEventListener('click', startQuiz)

