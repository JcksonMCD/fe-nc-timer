let timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");
const add60sButton = document.getElementById("add-60s-button");
const add5sButton = document.getElementById("add-5s-button");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("reset-button");
const pauseButton = document.getElementById("pause-button");

let countdownInterval = null;
let totalSeconds = 0;

function updateTimeDisplay() {
    const minutes = Math.floor(totalSeconds / 60); 
    const seconds = totalSeconds % 60; 
    timeRemaining.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

const addToTime = (e, extraTime) => {
    totalSeconds += extraTime;  
    updateTimeDisplay();
}

add30sButton.addEventListener("click", (e) => addToTime(e, 30));
add5sButton.addEventListener("click", (e) => addToTime(e, 5));
add60sButton.addEventListener("click", (e) => addToTime(e, 60));

const startCountdown = (e) => {
    if (totalSeconds > 0){
        totalSeconds--;
        updateTimeDisplay();
    } else {
        clearInterval(countdownInterval);
        startButton.disabled = false;
    }
}

startButton.addEventListener("click", (e) => {
    countdownInterval = setInterval(startCountdown, 1000);
    startButton.disabled = true;
}); 

restartButton.addEventListener("click", (e) => {
    timeRemaining.textContent = 0;
    totalSeconds = 0;
});

pauseButton.addEventListener("click", (e) => {
    clearInterval(countdownInterval);
    startButton.disabled = false;
})

