var qContainerEl = document.querySelector("#q-container");
var startButtonEl = document.querySelector("#start-btn");
var mainTextEl = document.querySelector("#main-text");
var subTextEl = document.querySelector("#sub-text");
var countdownTimerEl = document.querySelector("#timer");
var answerButtonsEl = document.querySelector("#answer-buttons");

var submitBtnEl = document.createElement('button');
var scoreTextEl = document.createElement('p');
var initialInputEl = document.createElement('input');

var btnOptionsEl = document.getElementsByClassName('btn-option');
var setIntervalId;
var i = 0;
var questionIndex = 0;

var questions = [
    {
        q: 'How does a for loop start?', a: [
            { text: "1. for (i = 0; i < 5; i++)", correct: true },
            { text: "2. for (i < 5; i++)", correct: false },
            { text: "3. for (i = 0; i < 5)", correct: false },
            { text: "4. for i = 1 to 5", correct: false }

        ]
    },
    {
        q: "Inside which HTML element do we put the Javascript?", a: [
            { text: "1. <script>", correct: true },
            { text: "2. <javascript>", correct: false },
            { text: "3. <scripting>", correct: false },
            { text: "4. <js>", correct: false }
        ]
    },
    {
        q: "What is the purpose of the 'body' element?", a: [
            { text: "1. The body element connects to the head element.", correct: false },
            { text: "2. The body contains all of the content of webpage.", correct: true },
            { text: "3. The body element will remain an empty placeholder.", correct: false },
            { text: "4. The body element is where all of the metadata is stored.", correct: false }
        ]
    },
    {
        q: "Which CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?", a: [
            { text: "1. text-align: center;", correct: false },
            { text: "2. overflow: auto;", correct: false },
            { text: "3. margin: auto;", correct: false },
            { text: "4. display: inline-block", correct: true }
        ]
    },
    {
        q: "Which one of these is NOT a valid media type for media queries?", a: [
            { text: "1. all", correct: false },
            { text: "2. screen", correct: false },
            { text: "3. speech", correct: false },
            { text: "4. tablet", correct: true }
        ]
    },
]


var time = questions.length * 15
var score = 0;
var highscore= [];

// start screen

// starts the quiz
function startQuiz() {
    startButtonEl.classList.add("hide");
    subTextEl.classList.add("hide");
    setIntervalId = setInterval(countdownStart, 1000);
    answerButtonsEl.classList.remove("hide");
    choiceCheck();
    displayQuestion();
}

// this starts the timer.
function countdownStart() {
    time--;
    countdownTimerEl.textContent = "Time: " + time + " seconds remaining";
    if (time === 0 || time <= 0) {
        clearInterval(setIntervalId);
        window.alert("You didn't finish in time. Try again.");
        homePage();
        
    }
    

}
// this checks the selected choice to see if it is correct. 
function choiceCheck() {
    for (i = 0; i < btnOptionsEl.length; i++) {
        (function (i) {
            btnOptionsEl[i].addEventListener("click", function () {
                var aVerify = questions[questionIndex].a;

                if (aVerify[i].correct === true) {
                    window.alert("You did it!");
                    questionIndex++
                    displayQuestion();

                } else {
                    window.alert("That is incorrect 15 seconds will be deducted from your time.");
                    questionIndex++
                    wrongChoice();
                }
            })
        })(i);
    }
}

// this for loop replaces the text in the question and answer lines and displays it in their respective fields.
function displayQuestion() {
    if (questionIndex < questions.length) {
        document.getElementById("main-text").textContent = questions[questionIndex].q;
        var answers = questions[questionIndex].a;
        document.getElementById("btn1").textContent = answers[0].text;
        document.getElementById("btn2").textContent = answers[1].text;
        document.getElementById("btn3").textContent = answers[2].text;
        document.getElementById("btn4").textContent = answers[3].text;
    }
    else {
        clearInterval(setIntervalId);
        quizEnd();
    }

}

// deducts time and displays a new question and answer.
function wrongChoice() {
    time = time - 15;
    //display new question
    displayQuestion();

}

// end screen
function quizEnd() {
    score = setIntervalId;
    countdownTimerEl.classList.add("hide");
    document.getElementById("main-text").textContent = "Save your high score!";
    
    
    submitBtnEl.textContent = "Submit";
    submitBtnEl.setAttribute("class", "btn");
    scoreTextEl.textContent = "Your score is " + score + "! Enter your initials:";
    qContainerEl.appendChild(scoreTextEl);
    qContainerEl.appendChild(initialInputEl);
    qContainerEl.appendChild(submitBtnEl);
    answerButtonsEl.classList.add("hide");

    // submit button to store intials and score to storage. 
}



// function savedScore() {
//     highscore.push(highscoreData);
//     localStorage.setItem()
// }

// this refreshes the webpage to display the first screen. The maintext line was interacting strangely when you re-started the quiz.
function homePage() {
    location.reload();
    // document.getElementById("main-text").textContent = "Code Quiz Challenge";
    // answerButtonsEl.classList.add("hide");
    // startButtonEl.classList.remove("hide");
    // subTextEl.classList.remove("hide");
    // countdownTimerEl.textContent = "Time: 0";
}


// highscore screen
// two buttons. one to return to homepage. one to clear storage.
// displays the highscore


//startButtonEl.classList.remove("hide");

startButtonEl.addEventListener('click', startQuiz);

submitBtnEl.addEventListener('click', function() {
    var initials = initialInputEl.value;
    var highscoreData = setIntervalId;
    if (initials === "") {
        window.alert("Please enter your initials.")
    }
    else {
        localStorage.setItem("initials", initials);
        localStorage.setItem("highscore", highscoreData);
    }
});



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score