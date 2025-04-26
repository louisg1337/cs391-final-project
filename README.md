# CS 391 Final Project: Spotify Popularity - Higher/Lower Game

## Description

Welcome to our CS 391 Final Project! This is a web-based "Higher/Lower" game where players test their intuition about song popularity. The game presents two songs, and the player must guess whether the second song has a higher or lower popularity score on Spotify compared to the first one. Rack up points for correct guesses and see how long your streak can last!

## Screenshot / Demo

*( screenshot of da game once it's functional.)*


*[If we deploy]*
* **Live Demo:** `[Link to Deployed App]`

## Features

* Fetches real song data and popularity scores using the Spotify API.
* Simple and intuitive "Higher" or "Lower" guessing interface.
* Tracks the player's current score (number of correct guesses).
* Displays a game over / fail screen upon an incorrect guess.
* Responsive design using Tailwind CSS.

## Tech Stack

* **Frontend:** React (bootstrapped with Vite), Tailwind CSS
* **Backend:** ___what u guys use ____ - Responsible for core logic and secure Spotify API interaction. 
* **API:** Spotify Web API

## How to Play

1.  Once the application is running, the game screen will appear.
2.  You will see the first song displayed.
3.  A second song will be presented.
4.  Guess whether the second song's popularity score on Spotify is **Higher** or **Lower** than the first song's score by clicking the corresponding button.
5.  If you guess correctly, your score increases, and a new song pair is presented.
6.  If you guess incorrectly, the game ends, and you'll see the fail screen with your final score.
7.  Try to beat your high score!

## Team Contributions

This project was developed by:

* **Nick:** Backend Development (Core logic)
* **Louis:** Frontend Development (Fail Screen UI/UX)
* **Rahil:** Backend Development (Spotify API Integration & Data Fetching)
* **Edward:** Frontend Development (Game Screen UI/UX)
