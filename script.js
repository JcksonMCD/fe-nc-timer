console.log('hello from index.js!');

let timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");
const add60sButton = document.getElementById("add-60s-button");
const add5sButton = document.getElementById("add-5s-button");
const startButton = document.getElementById("start-button");
console.log(startButton.textContent)

const addToTime = (e, extraTime) => {
    timeRemaining.textContent = Number(timeRemaining.textContent) + extraTime;
}
add30sButton.addEventListener("click", (e) => addToTime(e, 30));
add5sButton.addEventListener("click", (e) => addToTime(e, 5));
add60sButton.addEventListener("click", (e) => addToTime(e, 60));

const startCountdown = (e) => {
    if (Number(timeRemaining.textContent > 0)){
        timeRemaining.textContent = Number(timeRemaining.textContent) - 1;
    }
}

startButton.addEventListener("click", startCountdown()); 
setInterval(startCountdown, 1000);
