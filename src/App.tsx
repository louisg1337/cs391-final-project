// Edward Marecos and Rahil Shah

import HigherLowerGame from './components/HigherLowerGame/HigherLowerGame';
import './index.css';
import { CountryList } from './components/Country/CountryList';
import { useState } from 'react';
import StartScreen from './components/Screens/StartScreen';

const countries = await CountryList();
//console.log("Countries fetched:", countries);

export default function App() {
    const [gameState, setGameState] = useState<0 | 1>(0);

    const handleGameStart = () => {
        console.log("Game started");
        setGameState(1);
    };

    return (
        <>
            {gameState === 0 && <StartScreen onStart={handleGameStart} />}
            {gameState === 1 && <HigherLowerGame countries={countries} />}
        </>
    );
}
