
# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript.

![Tic-Tac-Toe Game Screenshot](./assets/game-screenshot.png) <!-- Optional: Add a screenshot in the assets folder -->

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Two-player Mode**: Alternate turns between "X" and "O".
- **Win Detection**: Highlights the winning line and displays the winner.
- **Tie Game Detection**: Identifies and displays a tie if all boxes are filled with no winner.
- **New Game Button**: Resets the board to start a new game.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/tic-tac-toe-game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tic-tac-toe-game
   ```

3. Open `index.html` in your preferred web browser to start the game.

## Usage

1. Open `index.html` in a web browser.
2. Players take turns clicking on the grid boxes to place their symbols ("X" or "O").
3. The game will check for a winner or tie after each turn.
4. If there's a winner, the winning combination is highlighted, and the winner is displayed.
5. Click the "New Game" button to reset and start a new round.

## Project Structure

```plaintext
├── index.html       # Main HTML file with structure and elements
├── styles.css       # CSS file for styling the board and UI
└── index.js         # JavaScript file with game logic and interactivity
```

## Customization

- **Background Image**: Update the background image by replacing the URL in `background-image` within the `.wrapper` class in `styles.css`.
- **Font Style**: The game uses the "Poppins" font from Google Fonts. You can change this by modifying the `<link>` tag in `index.html`.

## Contributing

Contributions are welcome! Please open an issue to discuss any changes before submitting a pull request.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

