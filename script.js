// Get audio elements
const flipSound = document.getElementById('flip-sound');
const winSound = document.getElementById('win-sound');
const drawSound = document.getElementById('draw-sound');
const restartSound = document.getElementById('restart-sound');
const newgameSound = document.getElementById('newgame-sound');

// Play sound functions
const playFlipSound = () => {
  flipSound.play();
};

const playWinSound = () => {
  winSound.play();
};

const playDrawSound = () => {
  drawSound.play();
};

const playRestartSound = () => {
  restartSound.play();
};

const playNewGameSound = () => {
  newgameSound.play();
};

// Get references to HTML elements
const cards = document.querySelectorAll('.card');
const restartBtn = document.getElementById('restart');
const popupRef = document.querySelector('.popup');
const newgameBtn = document.getElementById('new-game');
const msgRef = document.getElementById('message');

let board = Array(9).fill(null);
let gameActive = true; // To prevent interactions after game over
let symbolsArray = []; // Array to store shuffled X's and O's

// Function to shuffle the array of X's and O's
const shuffleSymbols = () => {
    symbolsArray = ['X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O'];
    for (let i = symbolsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [symbolsArray[i], symbolsArray[j]] = [symbolsArray[j], symbolsArray[i]];
    }
};

const flipCard = (index) => {
    if (!board[index] && gameActive) {
        const card = cards[index];
        card.classList.add('flipped');
        playFlipSound(); // Play flip sound
        setTimeout(() => {
            const symbol = symbolsArray[index];
            card.querySelector('.back').innerText = symbol;
            board[index] = symbol;
            checkWin();
        }, 300); // Delay to match card flip duration
    }
};

const checkWin = () => {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const [a, b, c] of winningPatterns) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setTimeout(() => {
                msgRef.innerHTML = `Player ${board[a]} Wins!`;
                popupRef.classList.remove('hide');
                playWinSound(); // Play win sound
                gameActive = false;
            }, 100); // Delay to match card flip duration
            return;
        }
    }

    if (board.every(cell => cell)) {
        setTimeout(() => {
            msgRef.innerHTML = "It's a Draw!";
            popupRef.classList.remove('hide');
            playDrawSound(); // Play draw sound
            gameActive = false;
        }, 500); // Delay to match card flip duration
    }
};

const resetGame = () => {
    board.fill(null);
    shuffleSymbols(); // Shuffle symbols for the new game
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('.back').innerText = '';
    });
    gameActive = true;
    popupRef.classList.add('hide');
    playRestartSound(); // Play restart sound
};

// Initialize the game
shuffleSymbols();

cards.forEach((card, index) => {
    card.addEventListener('click', () => flipCard(index));
});

restartBtn.addEventListener('click', () => resetGame());

newgameBtn.addEventListener('click', () => {
    resetGame();
    playNewGameSound();
});
