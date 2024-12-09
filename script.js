console.log('hello from index.js!');

let timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");
const add60sButton = document.getElementById("add-60s-button");
const add5sButton = document.getElementById("add-5s-button");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("reset-button");
console.log(startButton.textContent)

let countdownInterval = null;

const addToTime = (e, extraTime) => {
    timeRemaining.textContent = Number(timeRemaining.textContent) + extraTime;
}
add30sButton.addEventListener("click", (e) => addToTime(e, 30));
add5sButton.addEventListener("click", (e) => addToTime(e, 5));
add60sButton.addEventListener("click", (e) => addToTime(e, 60));

const startCountdown = (e) => {
    const currentTimeRemaining = Number(timeRemaining.textContent);
    if (currentTimeRemaining > 0){
        timeRemaining.textContent = currentTimeRemaining - 1;
    } else {
        clearInterval(countdownInterval);
        startButton.disabled = false;
    }
}

startButton.addEventListener("click", (e) => {
    countdownInterval = setInterval(startCountdown, 1000);
    startButton.disabled = true;
}); 

restartButton.addEventListener("click", (e) => timeRemaining.textContent = 0);
