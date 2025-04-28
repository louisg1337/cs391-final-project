// Louis Grassi
// UI Component for the end screen of the game
import Leaderboard from "../Leaderboard/Leaderboard";

type EndScreenProps = {
    score: number;
    onRestart: () => void;
};

export default function EndScreen({ score, onRestart }: EndScreenProps) {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center text-white">
            {/* Background GIF */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage: "url('../../../public/endgif.gif')",
                zIndex: -2,
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

            {/* Main Content */}
            <h1 className="mb-4 text-3xl font-bold">Game Over</h1>
            <p className="mb-2 text-lg">Your Score: {score}</p>
            <Leaderboard score={score} />
            <button
                onClick={onRestart}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 mt-6"
            >
                Restart Game
            </button>
            </div>
    );
}