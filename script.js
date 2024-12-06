console.log('hello from index.js!');

const timeRemaining = document.getElementById("time-remaining");
const add30sButton = document.getElementById("add-30s-button");

const handleClick = (e) => {
    console.log('I was clicked');
}
add30sButton.addEventListener("click", handleClick);