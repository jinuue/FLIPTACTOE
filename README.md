# Flip Tac Toe!

## Overview

**Flip Tac Toe!** is an interactive browser-based game that combines the classic Tic Tac Toe game with a card-flipping mechanic. The game features randomly shuffled symbols on cards, sound effects, and a moving background with floating symbols to enhance the gaming experience.

## Features

+ **Interactive Gameplay:** Players take turns flipping cards to reveal hidden symbols.
+ **Random Symbol Distribution:** Symbols are randomly placed on the cards at the start of each game.
+ **Winning Conditions:** Align three identical symbols in a row, column, or diagonal to win.
+ **Score Tracking:** Tracks the number of wins for Player X, Player O, and the number of draws.
+ **Sounds Effects:** Includes sound effects for card flips, winning, drawing, restarting, and starting a new game.
+ **Responsive Design:** The game adapts to different screen sizes and is optimized for mobile and desktop play.
+ **Animated Background:** Includes floating X's and O's in the background for added visual interest.
+ **How To Play Popup:** Instructions are provided to players at the beginning of the game.

## Getting Started

**Prerequisites**
To run Flip Tac Toe!, you only need a modern web browser. No additional software or libraries are required.

**Installation**
1. Clone the repository to your computer:
`git clone` [https://github.com/your-username/flip-tac-toe](url).
2. Navigate to the project directory:
`cd` flip-tac-toe
3. Open the `index.html` file in your preferred web browser.
open `index.html`

**File Structure**
+ index.html: The main HTML file that contains the structure of the game.
+ style.css: The CSS file responsible for the visual styling of the game.
+ script.js: The JavaScript file that handles the game logic, sound effects, and animations.
+ sounds/: Directory containing the sound effects used in the game.

**How to Play**
1. When the game starts, a "How To Play" popup will appear, explaining the game rules.
2. Click "Play Game" to start.
3. Players take turns clicking on cards to flip them and reveal hidden symbols.
4. The game tracks whose turn it is and displays this at the top.
5. Win by aligning three of the same symbols in a row, column, or diagonal.
6. The game automatically detects when a player wins or when the game is a draw, displaying a popup with the result.
7. Click "New Game" to start a new round or "Reset Game" to reset all scores and start fresh.

**Sound Effects**
_The game includes the following sound effects:_
> [!NOTE]
> sound effects used are copyright-free

+ Card Flip: Played when a card is flipped.
+ Win: Played when a player wins the game.
+ Draw: Played when the game ends in a draw.
+ Restart: Played when the game is reset.
+ New Game: Played when starting a new game.

**Floating Symbols**
The background features floating X's and O's that move from the bottom to the top of the screen, adding a dynamic element to the visual design.

## Customization
You can customize the game by modifying the following:

+ **Symbols and Colors:** Modify the CSS in `style.css` to change the symbols' appearance or colors.
+ **Sound Effects:** Replace the sound files in the `sounds/` directory with your own audio files.
+ **Background Animation:** Adjust the `@keyframes float` animation in `style.css` to change the movement and behavior of the floating symbols.

## Troubleshooting
+ If the game does not start, ensure that your browser supports modern JavaScript features such as `querySelector`, `addEventListener`, and CSS Grid.
+ For sound issues, ensure that your browser is not blocking audio playback or that the sound files are correctly placed in the `sounds/` directory.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue for any bugs or feature requests.
 
_Enjoy playing Flip Tac Toe!_ :x::o::x::o:

 



