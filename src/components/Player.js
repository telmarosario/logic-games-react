import { useState } from "react";
import music from "./../audio_files/song_1.mp3";

//* The Audio element needs to be created outside the functional component
let song = new Audio(music);

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (!isPlaying) {
      song.play();
      setIsPlaying(true);
    } else {
      song.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <h1>My audio player</h1>
      <button onClick={handleToggle}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default Player;
