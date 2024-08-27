// Get audio elements
const flipSound = document.getElementById('flip-sound');
const winSound = document.getElementById('win-sound');
const drawSound = document.getElementById('draw-sound');
const restartSound = document.getElementById('restart-sound');
const newgameSound = document.getElementById('newgame-sound');

// Play sound functions
const playFlipSound = () => flipSound.play();
const playWinSound = () => winSound.play();
const playDrawSound = () => drawSound.play();
const playRestartSound = () => restartSound.play();
const playNewGameSound = () => newgameSound.play();

// Get DOM elements
const cards = document.querySelectorAll('.card');
const resetGameBtn = document.getElementById('reset-game');
const popupRef = document.querySelector('.popup');
const newgameBtn = document.getElementById('new-game');
const msgRef = document.getElementById('message');
const turnIndicator = document.querySelector('.turn-indicator');
const infoPopup = document.querySelector('.info-popup');
const playGameBtn = document.getElementById('play-game');
const background = document.querySelector('.background');

// Get score elements
const xScoreRef = document.getElementById('x-score');
const oScoreRef = document.getElementById('o-score');
const drawScoreRef = document.getElementById('draw-score');

// Initialize scores
let xScore = 0;
let oScore = 0;
let drawScore = 0;

// Game state
let board = Array(9).fill(null);
let gameActive = true; // To prevent interactions after game over
let symbolsArray = []; // Array to store shuffled X's and O's
let currentPlayer = 'X'; // Track the current player

// Function to shuffle the array of X's and O's
const shuffleSymbols = () => {
    symbolsArray = ['X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O'];
    for (let i = symbolsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [symbolsArray[i], symbolsArray[j]] = [symbolsArray[j], symbolsArray[i]];
    }
};

// Update the turn indicator text
const updateTurnIndicator = () => {
    turnIndicator.innerText = `Player ${currentPlayer}'s turn`;
};

// Update score display
const updateScores = () => {
    xScoreRef.innerText = xScore;
    oScoreRef.innerText = oScore;
    drawScoreRef.innerText = drawScore;
};

// Switch player
const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateTurnIndicator();
};

// Flip a card
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
            if (gameActive) switchPlayer(); // Switch player after a successful flip
        }, 300); // Delay to match card flip duration
    }
};

// Check win condition
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

                // Update score
                if (board[a] === 'X') {
                    xScore++;
                } else {
                    oScore++;
                }
                updateScores(); // Update scores on the screen
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

            // Update draw score
            drawScore++;
            updateScores(); // Update scores on the screen
        }, 500); // Delay to match card flip duration
    }
};

// Reset game
const resetGame = () => {
    board.fill(null);
    shuffleSymbols(); // Shuffle symbols for the new game
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('.back').innerText = '';
    });
    gameActive = true;
    popupRef.classList.add('hide');
    updateTurnIndicator();
  };
  
  // Event listener for card clicks
  cards.forEach((card, index) => {
      card.addEventListener('click', () => flipCard(index));
  });
  
  // Reset scores and game when the "Reset Game" button is clicked
  resetGameBtn.addEventListener('click', () => {
      xScore = 0;
      oScore = 0;
      drawScore = 0;
      updateScores();
      resetGame();
      playRestartSound(); // Play restart sound
  });
  
  // Start a new game when "New Game" button is clicked
  newgameBtn.addEventListener('click', () => {
      resetGame();
      playNewGameSound(); // Play new game sound
  });
  
// Start the game when "Play Game" button is clicked
  playGameBtn.addEventListener('click', () => {
  infoPopup.classList.add('hide');
      initGame(); // Initialize the game here instead of just resetting
      playNewGameSound(); // Play new game sound
});

  
  // Function to create floating X's and O's for the background
  const createFloatingSymbols = () => {
      const symbols = ['X', 'O'];
      for (let i = 0; i < 10; i++) {
          const symbol = document.createElement('div');
          symbol.classList.add('floating-symbol');
          symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
          symbol.style.left = `${Math.random() * 100}%`;
          symbol.style.animationDuration = `${5 + Math.random() * 5}s`;
          background.appendChild(symbol);
      }
  };
  
  // Initialize game
  const initGame = () => {
      shuffleSymbols();
      updateTurnIndicator();
      createFloatingSymbols();
  };
  
  // Start the game initialization
  initGame();
  
   
