// src/components/HigherLowerGame/HigherLowerGame.tsx

// nick chang || edward marecos

import { useState } from "react";
import { Song } from "../../../types.ts";
import Card from "../Card/Card.tsx";
import Buttons from "../Buttons/Buttons.tsx";
import Result from "../Result/Result.tsx";
import Score from "../Score/Score.tsx";

// define props type for component
type HigherLowerGameProps = {
    // array of song objects from song
    songs: Song[];
};

export default function HigherLowerGame({ songs }: HigherLowerGameProps) {
    // track index of current song
    const [currentIndex, setCurrentIndex] = useState(0);
    // track if user made guess for round
    const [hasGuessed, setHasGuessed] = useState(false);
    // track if user's guess was correct
    const [isCorrect, setIsCorrect] = useState(false);
    // track number of correct guesses
    const [score, setScore] = useState(0);

    //edward marecos - state to trigger showing the game over screen ▼
    const [isGameOver, setIsGameOver] = useState(false);

    // select current song and next song to compare
    const currentSong = songs[currentIndex];
    const nextSong = songs[currentIndex + 1];

    // if no more songs to compare
    if (!currentSong || !nextSong) {
        return (
            // edward marecos - just styling and display score, nick wrote this function otherwise ▼
            <div className="flex min-h-screen items-center justify-center bg-gray-800 text-white text-xl">
                Game Over! No more songs to compare. Final Score: {score}
            </div>
        );
    }

    // function that handles when user makes a guess
    function handleGuess(guess: "higher" | "lower") {
        // correct answer based on popularity
        const correctAnswer =
            nextSong.popularity > currentSong.popularity ? "higher" : "lower";

        // check if user guess matches
        const userIsCorrect = guess === correctAnswer;
        // set state based on whether guess is correct
        setIsCorrect(userIsCorrect);
        setHasGuessed(true);

        // if correct, increase score
        if (userIsCorrect) {
            setScore((prev) => prev + 1);
        } else {
            // edward marecos - set game over ▼
            // set game state to over
            setIsGameOver(true);
        }
    }

    // function to move to next pair of songs
    function handleNext() {
        // next song in index
        setCurrentIndex((prev) => prev + 1);
        // reset guessing state
        setHasGuessed(false);
        // reset correct state
        setIsCorrect(false);
    }

    // edward marecos - temp end screen▼
    if (isGameOver) {
        // todo
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-700 p-4 text-white">
                go to game over // handle reset
            </div>
        );
    }

    // edward marecos - all of return▼
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white">
            {/* Container for the score */}
            <div className="mb-8">
                {/*score label, specify It's score and not high score*/}
                <Score label="Score" value={score} />
            </div>

            {/* Container for the two song cards */}
            <div className="flex w-full max-w-6xl items-stretch justify-center gap-8">
                {/* Left Card: Current song, always revealed */}
                <div className="w-1/2">
                    <Card track={currentSong} reveal={true} />
                </div>

                {/* Right Card: Next song, revealed only after guessing */}
                <div className="w-1/2">
                    <Card track={nextSong} reveal={hasGuessed} />
                </div>
            </div>

            {/* Container for buttons OR result + next button */}
            <div className="mt-8 flex min-h-[100px] flex-col items-center">
                {/* Conditional Rendering: Show Buttons OR Result/Next */}
                {!hasGuessed ? (
                    // If the user hasn't guessed, show the Higher/Lower buttons
                    <Buttons onGuess={handleGuess} />
                ) : (
                    // If the user has guessed, show the result and the Next button
                    <>
                        {/* Display the result using the Result component */}
                        <Result isCorrect={isCorrect} actualValue={nextSong.popularity} />

                        {/* Button to move to the next song pair */}
                        <button
                            onClick={handleNext}
                            className="mt-4 rounded-md bg-blue-500 px-6 py-3 text-xl font-semibold text-white shadow transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Next
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

