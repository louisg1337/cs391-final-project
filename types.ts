// Rahil Shah 
// This file contains the type definitions for the Spotify API responses and other related data structures.
// The Spotify API gives us a lot of information about songs, albums, and artists so we choose to 
// include only the most relevant information we needed for the game.
export type Song = {
  id: string; 
  name: string;         // name of the song
  artists: string[];    // array of artist names    
  popularity: number;   // popularity score from 0 to 100    
  albumUrl: string;     // holds the url for the album cover image   
};