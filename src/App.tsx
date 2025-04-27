// Edward Marecos

import HigherLowerGame from './components/HigherLowerGame/HigherLowerGame';
import { Song } from '../types';
import './index.css';

//  simulates the data that will eventually come from the API
const mockSongs: Song[] = [
    {
        id: "1",
        name: "Stick Season",
        artists: ["Noah Kahan"],
        popularity: 95, // Example popularity
        albumUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Noah_Kahan_-_Stick_Season.png",
    },
    {
        id: '2',
        name: "WAP (feat. Megan Thee Stallion)",
        artists: ["Cardi B", "Megan Thee Stallion"],
        popularity: 88, // Example popularity
        albumUrl: "https://upload.wikimedia.org/wikipedia/en/f/f4/Cardi_B_-_WAP_%28feat._Megan_Thee_Stallion%29.png",
    },
    {
        id: '3',
        name: "Blinding Lights",
        artists: ["The Weeknd"],
        popularity: 98,
        albumUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    },
    {
        id: '4',
        name: "As It Was",
        artists: ["Harry Styles"],
        popularity: 96,
        albumUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Harry_Styles_-_As_It_Was.png",
    },
    {
        id: '5',
        name: "Levitating",
        artists: ["Dua Lipa"],
        popularity: 90,
        albumUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Levitating.png",
    }
];

export default function App() {
    return (
        <HigherLowerGame songs={mockSongs} />
    );
}
