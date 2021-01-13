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

startBtn.addEventListener("click", function () {
    p.setAttribute("class", "d-none");
    startBtn.setAttribute("class", "d-none");
    btnList.classList.remove("d-none");

    renderQA();
    startTimer();
});
