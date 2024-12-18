let clickCount = 0;
let timer = 10;
let intervalId;

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const clickButton = document.getElementById("clickButton");
const timerDisplay = document.getElementById("timer");
const clickCountDisplay = document.getElementById("clickCount");

function startQuiz() {
  clickCount = 0;
  timer = 10;
  clickCountDisplay.textContent = clickCount;
  timerDisplay.textContent = timer;

  clickButton.disabled = false;
  stopButton.disabled = false;
  startButton.disabled = true;

  intervalId = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;

    if (timer <= 0) {
      stopQuiz();
    }
  }, 1000);
}

function stopQuiz() {
  clearInterval(intervalId);

  clickButton.disabled = true;
  stopButton.disabled = true;
  startButton.disabled = false;

  alert(`Quiz over! You clicked ${clickCount} times.`);
}

function countClick() {
  clickCount++;
  clickCountDisplay.textContent = clickCount;
}

startButton.addEventListener("click", startQuiz);
stopButton.addEventListener("click", stopQuiz);
clickButton.addEventListener("click", countClick);