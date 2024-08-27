# FLIP TAC TOE!: FORTUITY

## Overview

**Flip Tac Toe!: Fortuity** is an interactive browser-based game that combines the classic Tic Tac Toe mechanics with an innovative card-flipping twist. In this game, players engage with randomly shuffled symbols on cards, and the experience is enhanced by sound effects and a moving background filled with floating symbols. The game embraces the element of chance and surprise, making each match unique and emphasizing the fortuitous nature of every flip. Whether you're strategizing your next move or reveling in the unpredictability of the game, Flip Tac Toe! promises a fresh and exciting take on a timeless classic.

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

### Prerequisites
To run Flip Tac Toe!, you only need a modern web browser. No additional software or libraries are required.

### Technical Dependencies

+ **HTML5:** For structuring the game's content.
+ **CSS3:** For styling the game's layout and animations.
+ **JavaScript ES6+:** For implementing game logic and interactivity.
+ **Audio Support:** Ensure your browser supports HTML5 audio elements for sound effects.

### Setup Instructions
1. Clone the repository to your computer:
- `git clone` [https://github.com/your-username/flip-tac-toe](url).
2. Navigate to the project directory:
- `cd` flip-tac-toe
3. Open the `index.html` file in your preferred web browser.
- open `index.html`
4. _(Optional)_ Customize the Game:
+ If you want to customize the game, you can modify the following files:
 + `style.css`: To change the visual appearance of the game, including symbols and colors. Adjust the `@keyframes float` animation to change the movement and behavior of the floating symbols.
 + `script.js`: To adjust game logic, sound effects, or animations.
 + `sounds/`: Replace existing sound files with your own to customize audio effects.
6. _(Optional)_ Configure Sound Effects:
- Ensure that the sound files are correctly placed in the `sounds/` directory. You can replace the existing sound files with your own if desired. Make sure the filenames match those specified in `script.js`.
7. Verify Compatibility:
- Make sure your web browser is up to date and supports modern JavaScript features like `querySelector`, `addEventListener`, and CSS Grid. The game should run smoothly on most modern browsers, including Chrome, Firefox, Safari, and Edge.
8. Test the Game:
- After setting up, test the game to ensure that it runs as expected. Verify that all interactive elements, sound effects, and animations work correctly.

### File Structure
+ `index.html`: The main HTML file that contains the structure of the game.
+ `style.css`: The CSS file responsible for the visual styling of the game.
+ `script.js`: The JavaScript file that handles the game logic, sound effects, and animations.
+ `sounds/`: Directory containing the sound effects used in the game.

### How to Play
1. When the game starts, a **_"How To Play"_** popup will appear, explaining the game rules.
2. Click **_"Play Game"_** to start.
3. Players take turns clicking on cards to flip them and reveal hidden symbols.
4. The game tracks whose turn it is and displays this at the top.
5. Win by aligning three of the same symbols in a row, column, or diagonal.
6. The game automatically detects when a player wins or when the game is a draw, displaying a popup with the result.
7. Click **_"New Game"_** to start a new round or "Reset Game" to reset all scores and start fresh.

### Sound Effects
> [!NOTE]
> sound effects used are copyright-free & subject to change

+ Card Flip: Played when a card is flipped.
+ Win: Played when a player wins the game.
+ Draw: Played when the game ends in a draw.
+ Restart: Played when the game is reset.
+ New Game: Played when starting a new game.

### Floating Symbols
The background features floating X's and O's that move from the bottom to the top of the screen, adding a dynamic element to the visual design.

## Compatibility
**Browsers:** Compatible with the latest versions of Chrome, Firefox, Safari, and Edge.
**Operating Systems:** Works on Windows, macOS, and Linux.
**Devices:** Optimized for both desktop and mobile devices with responsive design adjustments.

## Troubleshooting
+ If the game does not start, ensure that your browser supports modern JavaScript features such as `querySelector`, `addEventListener`, and CSS Grid.
+ For sound issues, ensure that your browser is not blocking audio playback or that the sound files are correctly placed in the `sounds/` directory.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue for any bugs or feature requests.
 
_Enjoy playing Flip Tac Toe!_ :x::o::x::o:

 



