# Fighters Card Game

This is a simple React application for a fighters card game. In this game, players can select two fighters to fight against each other, where the attack of the first fighter is deducted from the health of the second fighter.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open your web browser and visit `http://localhost:3000` to view the application.

## Usage

Once the application is running, you can see a list of fighters displayed on the screen. Each fighter card contains information about the fighter's name, attack points, and health points.

To play the game:

1. Click on the first fighter you want to select.
2. Click on the second fighter you want to select.
3. The health points of the second fighter will be reduced by the attack points of the first fighter.

If you click on the same fighter card twice, you will deselect it.

## Components

### Fighters Component (`Fighters.js`)

This component is responsible for rendering the list of fighter cards and handling the selection of fighters.

### Card Component (`Card.js`)

This component represents an individual fighter card. It displays the fighter's name, attack points, and health points. It also handles the click event for selecting the fighter.

## State Management

The application uses React's `useState` hook to manage the state of selected fighters (`firstSelected`) and the list of fighter cards (`cards`).

## Functionality

- The `handleSelected` function is triggered when a fighter card is clicked. It determines the selected fighters and calculates the damage inflicted on the second fighter by the first fighter's attack points.
- The application prevents selecting the same fighter card as both the first and second fighters.
- Console logs are included for debugging purposes to track the flow of execution and the values of key variables.
