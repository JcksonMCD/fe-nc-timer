console.log('hello from index.js!');

let timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");
const startButton = document.getElementById("start-button");
console.log(startButton.textContent)

const add30ToTime = (e) => {
    timeRemaining.textContent = Number(timeRemaining.textContent) + 30;
    console.log(timeRemaining)
}
add30sButton.addEventListener("click", add30ToTime);

const startCountdown = (e) => {
    if (Number(timeRemaining.textContent > 0)){
        timeRemaining.textContent = Number(timeRemaining.textContent) - 1;
    }
}
const interval = setInterval(startCountdown, 1000);

startButton.addEventListener("click", startCountdown());
