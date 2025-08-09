import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

export const Player = () => {
  const audioRef = useRef(null);

  const playlist = [
    {
      title: "Vardha's One Man Army",
      src: "/songs/SpotiDownloader.com - Vardha's One Man Army - Ravi Basrur.mp3"
    },
    {
      title: "Adiga Adiga",
      src: "/songs/SpotiDownloader.com - Adiga Adiga - Sid Sriram.mp3"
    },
    {
      title: "Rock On Bro",
      src: "/songs/SpotiDownloader.com - Rock On Bro - Raghu Dixit.mp3"
    }
    // Add more songs here as needed
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSong = playlist[currentSongIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    setCurrentTime(0);
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const skipBackward = () => {
    setCurrentTime(0);
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      skipForward(); // Automatically go to next song
    };

    if (audio) {
      audio.addEventListener('loadedmetadata', onLoadedMetadata);
      audio.addEventListener('timeupdate', onTimeUpdate);
      audio.addEventListener('ended', onEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        audio.removeEventListener('timeupdate', onTimeUpdate);
        audio.removeEventListener('ended', onEnded);
      }
    };
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex]);

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

 return (
  <>
    <div className="container-fluid d-flex flex-column justify-content-end py-3">
      <div className="row">
        <div className="col-12">
          <div className="footer text-center">
            <div className="d-flex justify-content-center align-items-center gap-4 mb-2">
              <i className="fa-solid fa-shuffle skip"></i>
              <i className="fa-solid fa-backward skip" onClick={skipBackward}></i>

             <button
            className="play_button btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: 'transparent', 
              color: '#fff',              
              width: '55px',
              height: '55px',
              fontSize: '1.2rem',
              border: 'none',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)'
            }}
            onClick={togglePlay}
          >
  <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
</button>


              <i className="fa-solid fa-forward skip" onClick={skipForward}></i>
              <i className="fa-solid fa-repeat skip"></i>
            </div>

            <div className="progress-container px-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="time current-time">{formatTime(currentTime)}</span>

                <input
                  type="range"
                  className="flex-grow-1 mx-3 progress-bar"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  style={{
                    background: `linear-gradient(to right, green ${(currentTime / duration) * 100}%, #ccc 0%)`
                  }}
                />

                <span className="time total-time">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <audio ref={audioRef} src={currentSong.src} />
  </>
);

};
