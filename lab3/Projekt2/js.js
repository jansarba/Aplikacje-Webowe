let score = 0;
let lives = 3;
let zombies = [];
let isGameOver = false;
let sadMusic;

function scoreUpdate(hit) {
    const scoreDisplay = document.getElementById("i");
    let currentValue = parseInt(scoreDisplay.innerHTML);

    currentValue = hit ? currentValue + 20 : currentValue - 5;

    const formattedScore = currentValue < 0
        ? '-' + Math.abs(currentValue).toString().padStart(5, '0')
        : currentValue.toString().padStart(5, '0');

    scoreDisplay.innerHTML = formattedScore;
}

function createZombie() {
    let diff = 0.03;
    if (Math.random() > (1-diff)) {
        const zombie = {
            x: window.innerWidth,
            y: Math.random() * (window.innerHeight - 150),
            width: Math.random() * 100 + 50,
            speed: Math.random() * 1.5 + 0.4,
            imgSrc: 'img/zombie.png'
        };
        zombies.push(zombie);
    }
}

function updateZombies() {
    zombies.forEach((zombie, index) => {
        zombie.x -= zombie.speed;
        if (zombie.x < 0) {
            zombies.splice(index, 1);
            lives -= 1;
            updateHearts();
        }
    });

    if (lives <= 0) {
        gameOver();
    }
}

function updateHearts() {
    const hearts = document.querySelectorAll('.heart');
    for (let i = 0; i < hearts.length; i++) {
        if (i < lives) {
            hearts[i].src = 'img/full_heart.png';
        } else {
            hearts[i].src = 'img/empty_heart.png';
        }
    }
}

function renderZombies() {
    const zombieContainer = document.getElementById("zombies") || createZombieContainer();
    zombieContainer.innerHTML = '';

    zombies.forEach((zombie, index) => {
        const zombieDiv = document.createElement("div");
        zombieDiv.className = "zombie";
        zombieDiv.style.position = "absolute";
        zombieDiv.style.left = `${zombie.x}px`;
        zombieDiv.style.top = `${zombie.y}px`;
        zombieDiv.style.width = `${zombie.width}px`;
        zombieDiv.style.height = `${zombie.height}px`;
        zombieDiv.dataset.index = index;
        zombieDiv.classList.add('zombie');
        zombieDiv.style.pointerEvents = "auto";

        const zombieImage = document.createElement("img");
        zombieImage.src = zombie.imgSrc;
        zombieImage.style.width = "100%";
        zombieImage.style.height = "100%";

        zombieDiv.appendChild(zombieImage);
        zombieContainer.appendChild(zombieDiv);
    });
}

function createZombieContainer() {
    const zombieContainer = document.createElement("div");
    zombieContainer.style.zIndex = "100";
    zombieContainer.id = "zombies";
    document.body.appendChild(zombieContainer);
    return zombieContainer;
}

function handleHit(event) {
    if (isGameOver) return;

    const target = event.target.closest(".zombie");
    if (target) {
        const zombieIndex = parseInt(target.dataset.index, 10);
        zombies.splice(zombieIndex, 1);
        scoreUpdate(true);
        renderZombies();
    } else {
        scoreUpdate(false);
    }
}

function gameOver() {
    isGameOver = true;
    sadMusic = new Audio('img/sad-music.mp3');
    sadMusic.play();
    const gameOverPopup = document.getElementById("gameOverPopup")
    gameOverPopup.style.display = "flex";
    gameOverPopup.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    document.body.style.cursor = 'default';
}

function restartGame() {
    document.getElementById("i").innerHTML = "00000";
    score = 0;
    lives = 3;
    zombies = [];
    isGameOver = false;
    sadMusic.pause();
    sadMusic.currentTime=0;
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => (heart.src = 'img/full_heart.png'));

    document.getElementById("gameOverPopup").style.display = "none";
    document.body.style.cursor = 'url("img/aim2.png"), auto';
    gameLoop();
}

function gameLoop() {
    if (isGameOver) return;
    createZombie();
    updateZombies();
    renderZombies();

    requestAnimationFrame(gameLoop);
}

document.body.addEventListener("click", handleHit);

gameLoop();