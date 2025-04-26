// Rahil Shah
// 

import { useEffect, useState } from "react"; // import useEffect and useState so we can maintain the the state of the songs
import { Song } from "../../types" // import the Song type from the types file

// this is just getting the client id and secret from the .env file
const CLIENT_ID = process.env.SPOTIFY_CLIENT;
const CLIENT_SECRET = process.env.SPOTIFY_SECRET; 
const PLAYLIST_ID = "37i9dQZF1DXcBWIGoYBM5M"; // this is the playlist id for the "Today's Top Hits" playlist so we can get the songs from it

// this is the function that gets the access token from the spotify api
async function getAccessToken() {
    if (!CLIENT_ID || !CLIENT_SECRET) {
        throw new Error("Missing Spotify client ID or secret");
    }

    const authResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        },
        body: "grant_type=client_credentials",
    });
    
    const authData = await authResponse.json();
    const accessToken = authData.access_token;
    if (!accessToken) {
        throw null;
    }
    else {
        return accessToken;
    }
}

export default function SongsList() { // this is the main 
    const [songs, setSongs] = useState<Song[]>([]);

    useEffect(() => {
        async function fetchSongs() {
        try {
            const accessToken = getAccessToken(); // this is the access token that we get from the spotify api
            if (!accessToken) {
                throw new Error("Failed to get access token");
            }
            const playlistResponse = await fetch(
                `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks?limit=50`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const playlistData = await playlistResponse.json();

            const songsList: Song[] = playlistData.items.map((item: any) => {
                const track = item.track;
                return {
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist: any) => artist.name),
                    popularity: track.popularity,
                    albumUrl: track.album.images[0]?.url || "",
                };
            });

            setSongs(songsList);
            console.log("Fetched Songs:", songsList); 
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    }

    fetchSongs();
}, []);

    return (
        <div>
            <h2>Today's Top Hits</h2>
            <ul>
                {songs.map((song) => (
                <li key={song.id}>
                    {song.name} — {song.artists.join(", ")}
                </li>
                ))}
            </ul>
        </div>
    );
}