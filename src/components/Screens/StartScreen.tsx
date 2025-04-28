// Rahil Shah
// this the UI component for the start screen of the game

export default function StartScreen({ onStart }: { onStart: () => void }) {
    return (
        <div className="start-screen flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 space-y-8">
            <h1 className="text-4xl font-bold mb-6 text-yellow-400">Welcome to Higher or Lower Game!</h1>
            <p className="text-lg mb-4 text-center max-w-md"> Test your knowledge of country populations!</p>
            
            <div className="w-full max-w-lg space-y-3">
                <h2 className="text-2xl font-semibold text-center">How it works</h2>
                <p className="text-gray-300 leading-relaxed">
                You’ll see two countries each round. Guess whether the second country’s population is higher or lower than the first.
                </p>
            </div>

            <div className="w-full max-w-lg space-y-3">
                <h2 className="text-2xl font-semibold text-center">How to play</h2>
                <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2 leading-relaxed">
                <li>Click “Higher” if you think the second country has a larger population.</li>
                <li>Click “Lower” if you think the second country has a smaller population.</li>
                <li>Earn points for correct guesses and try to beat your high score!</li>
                </ul>
            </div>

            <button
                onClick={onStart}
                className="rounded-md bg-blue-500 px-6 py-3 text-xl font-semibold text-white shadow transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Start Game
            </button>
        </div>
    );
}