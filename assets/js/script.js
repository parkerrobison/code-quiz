var qContainerEl = document.querySelector("#q-container");
var startButtonEl = document.querySelector("#start-btn");
var mainTextEl = document.querySelector("#main-text");
var subTextEl = document.querySelector("#sub-text");
var countdownTimerEl = document.querySelector("#timer");
var answerButtonsEl = document.querySelector("#answer-buttons");
var btnOptionEl = document.getElementsByClassName("btn-option");
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
    {q: "What is the purpose of the 'body' element?", a: [
        {text: "1. The body element connects to the head element.", correct: false},
        {text: "2. The body contains all of the content of webpage.", correct: true},
        {text: "3. The body element will remain an empty placeholder.", correct: false},
        {text: "4. The body element is where all of the metadata is stored.", correct: false}
    ]},
    {q: "Which CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?", a: [
        {text: "1. text-align: center;", correct: false},
        {text: "2. overflow: auto;", correct: false},
        {text: "3. margin: auto;", correct: false},
        {text: "4. display: inline-block", correct: true}
    ]},
    {q: "Which one of these is NOT a valid media type for media queries?", a: [
        {text: "1. all", correct: false},
        {text: "2. screen", correct: false},
        {text: "3. speech", correct: false},
        {text: "4. tablet", correct: true}
    ]},
]


var time = questions.length * 15

// start screen

function startQuiz() {
startButtonEl.classList.add("hide");
subTextEl.classList.add("hide");
setIntervalId = setInterval(countdownStart, 1000);
answerButtonsEl.classList.remove("hide");
displayQuestion()
}
// questions screen

function countdownStart(){
    time--;
    countdownTimerEl.textContent= "Time: " + time + " seconds remaining";
    if (time === 0) {
        clearInterval(setIntervalId);
        quizEnd()
    }
    //case 1 - correct - i++ no penalty
    //case 2 - incorrect -i++ substract 10
    
}

//update i and include a loop
function displayQuestion() {
    for (i = 0; i < questions.length; i++) {
    document.getElementById("main-text").textContent = questions[i].q;
    var answers = questions[i].a;
   
    document.getElementById("btn1").textContent = answers[0].text;
    document.getElementById("btn2").textContent = answers[1].text;
    document.getElementById("btn3").textContent = answers[2].text;
    document.getElementById("btn4").textContent = answers[3].text;
    break;
    }
    
}

function choiceCheck(){
    console.log("You made a choice!")
}

// end screen
function quizEnd() {

}

//startButtonEl.classList.remove("hide");

startButtonEl.addEventListener('click', startQuiz);

btnOptionEl.addEventListener('click', choiceCheck);


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score