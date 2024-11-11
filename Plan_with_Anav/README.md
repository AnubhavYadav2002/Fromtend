


# Plan With Anav

A simple React app that displays tour information, allowing users to remove tours they're not interested in and refresh the list if all tours are removed.

## Project Overview

This project consists of a list of tour cards, each containing information about a specific tour, such as its name, price, description, and image. Users can expand the description, mark a tour as "Not Interested," or refresh the list when there are no tours left.

## Key Features

- **Show/Hide Description:** Each tour card has a "Show More" button to expand the full description. It toggles between "Show More" and "Show Less."
- **Remove Tour:** The "Not Interested" button on each tour card removes the tour from the list.
- **Refresh Tours:** When all tours are removed, a refresh button allows the user to reload the initial list of tours.

## Components

- **App:** The main component that holds the state of all tours. Contains logic to remove a tour and reset the list.
- **Tours:** A wrapper component that maps over the list of tours and renders individual tour cards.
- **Card:** Displays detailed tour information, including an image, price, and description. Contains logic to expand/collapse the tour description.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/plan-with-anav.git
   ```

2. Navigate into the project directory:

   ```bash
   cd plan-with-anav
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## File Structure

```
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Card.js         # Tour card component
│   │   ├── Tours.js        # Wrapper for tour cards
│   ├── App.js              # Main component
│   ├── data.js             # Initial data for tours
│   └── index.js            # Entry point for React
└── README.md
```

## Usage

- Click **Show More** to expand a tour's description.
- Click **Not Interested** to remove a tour from the list.
- Click **Refresh** to reload the initial list of tours when all have been removed.

## Dependencies

- **React** - A JavaScript library for building user interfaces.
