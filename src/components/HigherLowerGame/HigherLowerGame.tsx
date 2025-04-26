// src/components/HigherLowerGame/HigherLowerGame.tsx

// nick chang

import { useState } from "react";
import { Song } from "../../../types.ts";
// import Card from "../Card/Card.tsx";
// import Buttons from "../Buttons/Buttons.tsx";
// import Result from "../Result/Result.tsx";
// import Score from "../Score/Score.tsx";

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

    // select current song and next song to compare
    const currentSong = songs[currentIndex];
    const nextSong = songs[currentIndex + 1];

    // if no more songs to compare
    if (!currentSong || !nextSong) {
        return <div>No more songs to compare!</div>;
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

    return (
        <div style={{ textAlign: "center" }}>
            {/* display user's current score */}
            <Score score={score} />

            {/* display two songs side by side */}
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
                {/* current song which is always revealed */}
                <Card track={currentSong} reveal={true} />
                {/* next song only revealed if user has guessed */}
                <Card track={nextSong} reveal={hasGuessed} isNext />
            </div>

            {/* if user hasn't guessed yet, show guess buttons */}
            {!hasGuessed ? (
                <Buttons onGuess={handleGuess} />
            ) : (
                <>
                    {/* after guess, show whether user was correct */}
                    <Result isCorrect={isCorrect} actualValue={nextSong.popularity} />

                    {/* button to move to the next song pair */}
                    <button onClick={handleNext} style={{ marginTop: "1rem" }}>
                        Next
                    </button>
                </>
            )}
        </div>
    );
}
