// Edward Marecos ▼

interface ScoreProps {
    label: string; // The text label (e.g., "Score", "High Score")
    value: number; // The numerical score value
}

export default function Score({ label, value }: ScoreProps) {

    return (
        <div className="rounded-lg bg-black bg-opacity-60 px-4 py-2 text-center shadow">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-300">{label}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    );
}
