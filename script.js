console.log('hello from index.js!');

let timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");
const add60sButton = document.getElementById("add-60s-button");
const add5sButton = document.getElementById("add-5s-button");
const startButton = document.getElementById("start-button");
console.log(startButton.textContent)

const addToTime = (e) => {
    timeRemaining.textContent = Number(timeRemaining.textContent) + e;
    console.log(timeRemaining)
}
add30sButton.addEventListener("click", addToTime(30));
add5sButton.addEventListener("click", addToTime(5)); 
add60sButton.addEventListener("click", addToTime(60));

const startCountdown = (e) => {
    if (Number(timeRemaining.textContent > 0)){
        timeRemaining.textContent = Number(timeRemaining.textContent) - 1;
    }
}

startButton.addEventListener("click", startCountdown()); 
setInterval(startCountdown, 1000);
