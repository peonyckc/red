const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const welcomeScreen = document.getElementById('welcome-screen');
const playButton = document.getElementById('play-btn');
const quitButton = document.getElementById('quit-btn');

// Welcome screen logic
playButton.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    startGame();
});

quitButton.addEventListener('click', () => {
    alert('Goodbye!');
    window.close();
});

function startGame() {
    drawRedPanda();
    dropFlags();
}

// Draw red panda
function drawRedPanda() {
    const pandaImage = new Image();
    pandaImage.src = './images/redpanda.png';
    pandaImage.onload = () => {
        ctx.drawImage(pandaImage, canvas.width / 2 - 50, canvas.height - 150, 100, 100);
    };
}

// Drop flags
function dropFlags() {
    const flagImage = new Image();
    flagImage.src = './images/flag.png'; // Placeholder for flag image
    let y = 0;
    flagImage.onload = () => {
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(flagImage, Math.random() * canvas.width, y, 50, 30);
            y += 5;
            if (y > canvas.height) y = 0;
        }, 50);
    };
}
