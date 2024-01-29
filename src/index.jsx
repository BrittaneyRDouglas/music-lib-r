// App.js

import React, { useState } from 'react';
import SongList from './SongList';
import Player from './Player';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      audio: 'path/to/song1.mp3',
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      audio: 'path/to/song2.mp3',
    },
    // Add more songs as needed
  ];

  return (
    <div className="app">
      <SongList songs={songs} setCurrentSong={setCurrentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default App;
