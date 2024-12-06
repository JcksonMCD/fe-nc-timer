console.log('hello from index.js!');

let timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");

const add30ToTime = (e) => {
    timeRemaining.textContent = Number(timeRemaining.textContent) + 30;
    console.log(timeRemaining)
}
add30sButton.addEventListener("click", add30ToTime);