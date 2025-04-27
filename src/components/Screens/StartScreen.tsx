// Rahil Shah
// this the UI component for the start screen of the game

export default function StartScreen({ onStart }: { onStart: () => void }) {
    return (
        <div className="start-screen">
            <h1>Welcome to the Higher Lower Game!</h1>
            <p>Can you guess which country has a higher population?</p>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
}