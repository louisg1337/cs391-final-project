// Edward Marecos ▼

import { Country } from "../../../types";

// define the props the card component expects
interface CardProps {
    country: Country;    // country object from 'country'
    reveal: boolean; // controls visibility of the population score
}

export default function Card(
    { country, reveal}: CardProps
) {
    const populationString = country.population.toLocaleString();

    return (
        // Card container styling (using Tailwind)
        <div
            className="relative flex h-full flex-col items-center justify-center rounded-lg border border-gray-700 bg-gray-800 bg-cover bg-center p-6 text-center shadow-lg" // Added rounded corners, border, bg
            // Use albumUrl from the track prop for the background image
            // the rgb styling is to make a semitransparent layer over the song image - looks cleaner
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${country.flag})` }}
        >
            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Country Name */}
                <h2 className="mb-2 text-3xl font-bold text-white drop-shadow-md md:text-4xl">
                    {country.name.common}
                </h2>

                {/* Conditional Rendering: Population */}
                {/* Show population only if the 'reveal' prop is true */}
                {reveal ? (
                    <>
                        <p className="text-md text-gray-400">has a population of</p>
                        <p className="my-1 text-5xl font-extrabold text-yellow-400 drop-shadow-lg md:text-6xl">
                            {/* Display the population from the country prop */}
                            {populationString}
                        </p>
                    </>
                ) : (
                    // Show a grey ? if population is hidden
                    <div className="min-h-[90px] flex items-center justify-center">
                        <p className="text-4xl text-gray-500">?</p>
                    </div>
                )}
            </div>
        </div>
    );
}

