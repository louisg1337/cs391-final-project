// Edward Marecos ▼

import { Song } from "../../../types";

// define the props the card component expects
interface CardProps {
    track: Song;    // song object from 'song'
    reveal: boolean; // controls visibility of the popularity score
}

export default function Card(
    { track, reveal}: CardProps
) {

    return (
        // Card container styling (using Tailwind)
        <div
            className="relative flex h-full flex-col items-center justify-center rounded-lg border border-gray-700 bg-gray-800 bg-cover bg-center p-6 text-center shadow-lg" // Added rounded corners, border, bg
            // Use albumUrl from the track prop for the background image
            // the rgb styling is to make a semitransparent layer over the song image - looks cleaner
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${track.albumUrl})` }}
        >
            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Song Name */}
                <h2 className="mb-2 text-3xl font-bold text-white drop-shadow-md md:text-4xl">
                    "{track.name}"
                </h2>

                {/* Artist Name(s) - Join the array */}
                <p className="mb-4 text-lg text-gray-300 drop-shadow-md">
                    {/* Use track.artists which is an array */}
                    by {track.artists.join(", ")}
                </p>

                {/* Conditional Rendering: Popularity Score */}
                {/* Show popularity only if the 'reveal' prop is true */}
                {reveal ? (
                    <>
                        <p className="text-md text-gray-400">has a popularity score of</p>
                        <p className="my-1 text-5xl font-extrabold text-yellow-400 drop-shadow-lg md:text-6xl">
                            {/* Display the popularity score from the track prop */}
                            {track.popularity}
                        </p>
                    </>
                ) : (
                    // Show a grey ? if popularity is hidden
                    <div className="min-h-[90px] flex items-center justify-center">
                        <p className="text-4xl text-gray-500">?</p>
                    </div>
                )}
            </div>
        </div>
    );
}

