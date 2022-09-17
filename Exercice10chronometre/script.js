const timer = document.getElementById('chrono');

var min = 0;
var sec = 0;
var secX = 0;
var stoptime = true;
var clear;


function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function timerCycle() {
    if (stoptime == false) {
    secX = parseInt(secX);
    sec = parseInt(sec);
    min = parseInt(min);

    secX = secX + 1;

    if (secX == 60) {
      sec = sec + 1;
      secX = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      secX = 0;
    }

    if (secX < 10 || secX == 0) {
      secX = '0' + secX;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + secX;

    clear = setTimeout(timerCycle, 10);
  }
}

function stopTimer() {
  if (stoptime == false) {
    clearTimeout(clear);
    stoptime = true;
  }
}

function resetTimer() {
    clearTimeout(clear);
    timer.innerHTML = "00:00:00";
    stoptime = true;
    min = 0;
    secX = 0;
    sec = 0;

}

window.addEventListener("load", function () {
  document.getElementById("demarre").addEventListener("click", startTimer);
  document.getElementById("pause").addEventListener("click", stopTimer);
  document.getElementById("clear").addEventListener("click", resetTimer);

});