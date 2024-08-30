const flipSound = document.getElementById('flip-sound');
const winSound = document.getElementById('win-sound');
const drawSound = document.getElementById('draw-sound');
const restartSound = document.getElementById('restart-sound');
const newgameSound = document.getElementById('newgame-sound');

const playFlipSound = () => flipSound.play();
const playWinSound = () => winSound.play();
const playDrawSound = () => drawSound.play();
const playRestartSound = () => restartSound.play();
const playNewGameSound = () => newgameSound.play();

const cards = document.querySelectorAll('.card');
const resetGameBtn = document.getElementById('reset-game');
const popupRef = document.querySelector('.popup');
const newgameBtn = document.getElementById('new-game');
const msgRef = document.getElementById('message');
const turnIndicator = document.querySelector('.turn-indicator');
const infoPopup = document.querySelector('.info-popup');
const playGameBtn = document.getElementById('play-game');
const background = document.querySelector('.background');

const xScoreRef = document.getElementById('x-score');
const oScoreRef = document.getElementById('o-score');
const drawScoreRef = document.getElementById('draw-score');

// Initialize scores
let xScore = 0;
let oScore = 0;
let drawScore = 0;

// Game state
let board = Array(9).fill(null);
let gameActive = true; 
let symbolsArray = []; 
let currentPlayer = 'X'; 

// Function to shuffle the array of X's and O's
const shuffleSymbols = () => {
    const numX = 4; 
    const numO = 4; 
    symbolsArray = Array(numX).fill('X').concat(Array(numO).fill('O')).concat([' ']); // Neutral card on 9th pos.
    for (let i = symbolsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [symbolsArray[i], symbolsArray[j]] = [symbolsArray[j], symbolsArray[i]];
    }
};

const updateTurnIndicator = () => {
    turnIndicator.innerText = `Player ${currentPlayer}'s turn`;
};

const updateScores = () => {
    xScoreRef.innerText = xScore;
    oScoreRef.innerText = oScore;
    drawScoreRef.innerText = drawScore;
};

const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateTurnIndicator();
};

const flipCard = (index) => {
    if (!board[index] && gameActive) {
        const card = cards[index];
        card.classList.add('flipped');
        playFlipSound();
        setTimeout(() => {
            const symbol = symbolsArray[index];
            card.querySelector('.back').innerText = symbol;
            board[index] = symbol;
            checkWin();
            if (gameActive) switchPlayer(); 
        }, 300); 
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
                playWinSound();
                gameActive = false;

                if (board[a] === 'X') {
                    xScore++;
                } else {
                    oScore++;
                }
                updateScores(); 
            }, 100); 
            return;
        }
    }

    if (board.every(cell => cell)) {
        setTimeout(() => {
            msgRef.innerHTML = "It's a Draw!";
            popupRef.classList.remove('hide');
            playDrawSound();
            gameActive = false;

            drawScore++;
            updateScores(); 
        }, 500); 
    }
};

// Reset game
const resetGame = () => {
    board.fill(null);
    shuffleSymbols(); 
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
  
  // Reset scores when "reset game" btn is clicked
  resetGameBtn.addEventListener('click', () => {
      xScore = 0;
      oScore = 0;
      drawScore = 0;
      updateScores();
      resetGame();
      playRestartSound(); 
  });
  
  newgameBtn.addEventListener('click', () => {
      resetGame();
      playNewGameSound(); 
  });
  
// Start game when "play game" btn is clicked
  playGameBtn.addEventListener('click', () => {
  infoPopup.classList.add('hide');
      initGame(); 
      playNewGameSound(); 
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

  const initGame = () => {
      shuffleSymbols();
      updateTurnIndicator();
      createFloatingSymbols();
  };
  
  initGame();
  
   
