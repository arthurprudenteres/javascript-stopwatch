const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");

let seconds = document.getElementById("seconds");
let tens = document.getElementById("tens");

let tensCounter = 0;
let secondsCounter = 0;
let intervalId;
let isRunning = false;

buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("click", timerStop);
buttonReset.addEventListener("click", resetTimer);

function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(timerCount, 10);
    isRunning = true;
  }
}

function timerCount() {
  tensCounter += 1;
  tensCounter < 10
    ? (tens.textContent = "0" + tensCounter)
    : (tens.textContent = tensCounter);
  if (tensCounter === 99) {
    secondsCounter += 1;
    tensCounter = 0;
    secondsCounter < 10
      ? (seconds.textContent = "0" + secondsCounter)
      : (seconds.textContent = secondsCounter);
  }
}

function timerStop() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  tensCounter = 0;
  secondsCounter = 0;
  tens.textContent = "00";
  seconds.textContent = "00";
}
