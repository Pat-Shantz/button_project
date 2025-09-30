//Script for the confetti feature
//function runConfetti() {
    //confetti(
        //particleCount: 100,
        //spread:70,
        //origin: { y: 0.6 }
    //)
//}

//const button = document.getElementById('myButton');

//button.addEventListener('click', runConfetti);


//Script for the counter feature
let currentCount = 0;
const displayElement = document.getElementById('counter-display');
const buttonElement = document.getElementById('myButton');

function incrementCounter() {
    //increments the variable
    currentCount += 1;
    //updates HTML display
    displayElement.textContent = currentCount;
    //optional: log the new value to the browser console for debugging (console.log("new count:", currentCount); <-- what is this all about?)
}

buttonElement.addEventListener('click', incrementCounter);

