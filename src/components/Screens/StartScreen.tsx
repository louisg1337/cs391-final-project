// Rahil Shah
// this the UI component for the start screen of the game

import { useState } from "react";
import { CountryList } from "../Country/CountryList";
import HigherLowerGame from "../HigherLowerGame/HigherLowerGame";

const countries = await CountryList(); // fetch the list of countries

export default function StartScreen() {
    const [gameState, setGameState] = useState<0 | 1>(0); // use this to maintain the state of the game
    // 0 = start screen, 1 = game screen
    
    const handleGameStart = () => {
        //console.log("Game started");
        setGameState(1); // player started game so set state 1
    };
    
    if (gameState === 1) { // if game state is 1, show the game screen
        return (
            <HigherLowerGame countriesInput={countries}/> // load the game screen and pass in the countries list
        );
    }

    // otherwise show the start screen with the instructions and start button
    return (
        // div holding the start screen
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 gap-7 tracking-wide">
            { /* Game title and subtitle*/}
            <div className="text-center max-w-xl">
                <h1 className="text-4xl font-bold text-yellow-400 "> Welcome to <strong className="text-green-500">Higher </strong> or <strong className="text-red-500">Lower</strong>!</h1>
                <p className="text-lg text-gray-300"> Test your knowledge of country populations </p>
            </div>

            { /* Game explanation */}
            <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-center text-yellow-400">How it works</h2>
                <p className="text-gray-300 pl-6">
                You’ll see two countries each round. You need to figure out whether the second country’s population is <strong className="text-green-500">higher</strong> or <strong className="text-red-500">lower</strong> than the first.
                </p>
            </div>

            { /* Tutorial */}
            <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-center text-yellow-400">How to play</h2>
                <ul className="list-disc list-outside pl-6 text-gray-300">
                <li>Click <strong className="text-green-500">Higher </strong>if you think the second country has a larger population.</li>
                <li>Click <strong className="text-red-500">Lower </strong> if you think the second country has a smaller population.</li>
                <li>Earn points for correct guesses and try to beat your high score!</li>
                <li>If you answer incorrectly, the game will end and you can see how your score compares with the leaderboard!</li>
                </ul>
            </div>

            { /* Start button */}
            <button
                onClick={handleGameStart}
                className="rounded-md bg-blue-500 px-8 py-4 text-4xl font-bold text-white shadow hover:cursor-pointer">
                Start Game
            </button>
        </div>
    );
}