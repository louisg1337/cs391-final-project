# CS 391 Final Project: Country Population - Higher/Lower Game

## Description

Welcome to our CS 391 Final Project! This is a web-based "Higher/Lower" game where players test their intuition about country populations. The game presents two countries, and the player must guess whether the second country has a higher or lower population compared to the first one. Rack up points for correct guesses and see how long your streak can last!

## Features

* Fetches real country data and population counts using a REST countries API.
* Simple and intuitive "Higher" or "Lower" guessing interface.
* Tracks the player's current score (number of correct guesses).
* Displays a game over / fail screen upon an incorrect guess.
* Responsive design using Tailwind CSS.

## Tech Stack

* **Frontend:** React (bootstrapped with Vite), Tailwind CSS
* **API:** REST Countries API

## How to Play

1.  Once the application is running, the game screen will appear.
2.  You will see the first country displayed.
3.  A second country will be presented.
4.  Guess whether the second country's population is **Higher** or **Lower** than the first country's population by clicking the corresponding button.
5.  If you guess correctly, your score increases, and a new country pair is presented.
6.  If you guess incorrectly, the game ends, and you'll see the fail screen with your final score along with the leaderboard.
7.  Try to beat your high score!

## Team Contributions

This project was developed by:

* **Nick:** Backend Development (Core logic)
* **Louis:** Frontend Development (Fail Screen & Leaderboard UI/UX)
* **Rahil:** Frontend/Backend Development (Country API Integration & Start Screen UI/UX)
* **Edward:** Frontend Development (Game Screen UI/UX)
