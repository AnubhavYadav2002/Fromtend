
# DevDetective

DevDetective is a GitHub profile search tool that allows users to quickly retrieve and display details of any GitHub account. This web application provides information such as profile picture, username, bio, repositories, followers, following count, location, and other details. It also features dark mode toggle functionality to improve the viewing experience in different lighting conditions.

## Features

- **User Profile Search**: Enter a GitHub username to retrieve user information, including:
  - Profile picture, bio, followers, following count
  - Repository count and links to personal website or Twitter if available
- **Dark Mode**: Easily switch between light and dark mode for an enhanced user experience
- **Error Handling**: Displays an error message if the GitHub username is not found

## Tech Stack

- **HTML** for structure
- **CSS** for styling, including light and dark mode themes
- **JavaScript** for DOM manipulation and API integration
- **GitHub API** for fetching user data dynamically

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/DevDetective.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd DevDetective
   ```

3. **Open `index.html` in your browser** to start the application.

### Prerequisites

You will need a web browser (e.g., Chrome, Firefox) to view the application.

## Usage

1. **Search GitHub Users**: Enter a GitHub username in the search bar and press `Search`. The profile data will display if found, otherwise, an error will appear.
2. **Toggle Dark Mode**: Click on the dark mode toggle button in the header to switch between light and dark themes.

## Project Structure

```
.
├── index.html              # Main HTML file
├── styles.css              # CSS file for styling
├── script.js               # JavaScript file for handling API calls and DOM updates
└── assets/                 # Assets folder containing images, icons, and favicons
```

## Code Overview

### `index.html`

- Basic structure for the application with a container for the search bar, profile display, and toggle button.

### `styles.css`

- Contains light and dark mode styling using CSS variables.
- Responsive design adjustments for tablets and desktops.

### `script.js`

- Handles API calls to GitHub to fetch user data.
- Contains functions for updating the DOM with fetched data.
- Implements light/dark mode toggle and saves user preferences in `localStorage`.

## API

This project uses the [GitHub Users API](https://docs.github.com/en/rest/reference/users) to fetch user data by GitHub username.

