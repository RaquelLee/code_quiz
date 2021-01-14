var timerEl = document.getElementById("timer");
var vs = document.getElementById("vs");
var h1 = document.getElementById("header");
var p = document.getElementById("p");
var startBtn = document.getElementById("startBtn");
var form = document.getElementById("form");
var submitBtn = document.getElementById("submitBtn");
var goBck = document.getElementById("goBck");
var scoreClr = document.getElementById("scoreClr");
var btnList = document.getElementById("btnList");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var olEl = document.getElementById("scoreList");
var pop = document.getElementById("pop");

vs.addEventListener("click", scorePage);

startBtn.addEventListener("click", function () {
    p.setAttribute("class", "d-none");
    startBtn.setAttribute("class", "d-none");
    btnList.classList.remove("d-none");

    renderQA();
    startTimer();
});

var qacObjArr = [

    {
        question: "Commonly used data types do NOT include ____",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },

    {
        question: "The condition in an if/else statement is enclosed  within ____",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis"
    },

    {
        question: "Arrays in JavaScript can be used to store ____",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },

    {
        question: "String values must be enclosed within ____ when   being assigned to variables",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ____",
        answers: ["javascript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    },
]

function renderQA() {
    if (counter === 5) {
        return;
    }

    h1.textContent = objectProperty.question;
    
    btns = [btn1, btn2, btn3, btn4];

    for (i = 0; i < btns.length; i++) {

        btns[i].textContent = objectProperty.answers[i];
    }

}
var counter = 0;
var objectProperty = qacObjArr[counter];

btnList.addEventListener("click", function (event) {
    
    var userAnswer = event.target;

    if (userAnswer.textContent !== objectProperty.correct) {
        pop.textContent = "Incorrect!";
        timerCount -= 10;
    } else {
        pop.textContent = "Correct!";

    }

    setTimeout(function(){
        pop.textContent="";
        },500);
        
    counter++
    objectProperty = qacObjArr[counter];
    renderQA();

});
var timerCount = 75;

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = "Timer: " + timerCount;
        if (timerCount >= 0) {
            if (counter === 5 && timerCount > 0) {
                endGame();
            }
        }
        if (timerCount === 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    initialsPage();
}


function initialsPage() {
initialsPageStyle();
    p.textContent = "Your score is: " + timerCount;

        submitBtn.addEventListener("click", function (event) {
            event.preventDefault();
            scorePage();
        }        
        )}

function scorePage() {
    scorePageStyle();
    var initials = document.getElementById("initials").value;

    var userData = {
        Score: timerCount,
        User: initials
    };

    var userScoresArray = JSON.parse(localStorage.getItem("userScoresArray")) || [];

    userScoresArray.push(userData);

    localStorage.setItem("userScoresArray", JSON.stringify(userScoresArray));

    
        for (i=0;i < userScoresArray.length;i++){
            var userScore = document.createElement("li");
            userScore.textContent = "Initials: " + userScoresArray[i].User + " Score: " + userScoresArray[i].Score;
            olEl.appendChild(userScore);
        } 
        scoreClr.addEventListener("click", function () {
            localStorage.clear();
            removeAllChildNodes(olEl);
        });
        
    }

    goBck.addEventListener("click", function () {
        location.reload();
        return false;
    });

    function removeAllChildNodes(parent){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }    
    
    function initialsPageStyle() {
        btnList.setAttribute("class", "d-none");
        h1.textContent = "Save Score";
        p.classList.remove("d-none");
        form.classList.remove("d-none");
    }
    function scorePageStyle() {
        goBck.classList.remove("d-none");
        scoreClr.classList.remove("d-none");
        h1.textContent = "Score Page";
        form.setAttribute("class", "d-none");
        startBtn.setAttribute("class", "d-none");
        p.setAttribute("class", "d-none");
    }