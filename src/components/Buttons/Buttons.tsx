// edward marecos ▼

interface ButtonsProps {
    onGuess: (guess: 'higher' | 'lower') => void;
}

export default function Buttons(
    {onGuess}: ButtonsProps,
) {
    return (
        <div className="flex w-full max-w-xs flex-col space-y-3">
            <button
                // Call the onGuess function with 'higher' when clicked
                onClick={() => onGuess('higher')}
                className="rounded-md bg-green-500 px-6 py-3 text-xl font-semibold text-white shadow transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Higher ▲ {/* Text and up arrow */}
            </button>

            {/* Lower Button */}
            <button
                // Call the onGuess function with 'lower' when clicked
                onClick={() => onGuess('lower')}
                className="rounded-md bg-red-500 px-6 py-3 text-xl font-semibold text-white shadow transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            >
                Lower ▼ {/* Text and down arrow */}
            </button>
        </div>
    );
}