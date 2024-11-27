let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById("display").innerText = minutes > 0 ? `${minutes}min ${remainingSeconds}s` : `${remainingSeconds}s`;
}

document.getElementById("start").addEventListener("click", () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    running = false;
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
});