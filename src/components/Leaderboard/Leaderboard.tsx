// Louis Grassi
// UI Component for the leaderboard, displays top scores and where the user stands
export default function Leaderboard({score}: {score: number}) {
    // Define top scores
    const topScores = [
        { name: "Rahil", score: 22 },
        { name: "Ed", score: 13 },
        { name: "Nick", score: 5 },
        { name: "Louis", score: 2 },
        { name: "You", score: score }
    ];

    // Sort scores in descending order
    const sortedScores = topScores.sort((a, b) => b.score - a.score);

    return (
        <div className="flex w-full flex-col items-center justify-center text-white">
            <h1 className="mb-4 text-3xl font-bold">Leaderboard</h1>
            <div className="mt-2 w-full max-w-md rounded-lg bg-gray-800 p-4 shadow">
                <ul>
                    {
                        sortedScores.map((entry, index) => (  
                            <li key={index} className={`py-2 border-b border-gray-700 ${entry.name === "You" ? "text-yellow-400" : ""}`}>
                                {entry.name} - Score: {entry.score}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}