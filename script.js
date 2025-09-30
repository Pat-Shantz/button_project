function runConfetti() {
    confetti(
        particleCount: 100,
        spread:70,
        origin: { y: 0.6 }
    )
}

const button = document.getElementById('myButton');

button.addEventListener('click', runConfetti);
