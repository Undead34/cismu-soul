import { PiShuffle, PiSliders, PiQueue, PiArrowsClockwise, PiSpeakerHigh, PiWaveform } from "react-icons/pi";
import { useMusicPlayer } from "../MusicPlayer/useMusicPlayer";
import React, { useState, useEffect } from "react";

const MusicControl = () => {
  const musicPlayer = useMusicPlayer();
  const [volume, setVolume] = useState(musicPlayer.volume * 100);

  useEffect(() => {
    function setVolumeChange() {
      setVolume(musicPlayer.volume * 100);
    }

    musicPlayer.addEventListener("volumechange", setVolumeChange);

    return () => {
      musicPlayer.removeEventListener("volumechange", setVolumeChange);
    };
  }, [volume]);

  return (
    <div className="absolute z-50 inline-block w-56 -translate-x-[50%] -translate-y-[130%] bg-[#23232d] shadow-md">
      <div className="flex px-2 py-3">
        <input
          value={volume}
          onChange={(e) => (musicPlayer.volume = Number(e.target.value) / 100)}
          className="flex-1"
          type="range"
          min={0}
          step={0.1}
          max={100}
        />
      </div>
    </div>
  );
};

export default function PlayingBarOptions() {
  const [showMusicControl, setShowMusicControl] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    setShowMusicControl(true);
    clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setShowMusicControl(false);
    }, 400);

    setTimeoutId(timeoutId);
  };

  return (
    <div className="flex items-center gap-1 text-white">
      <div className="flex gap-1 text-base">
        <button className="rounded-[46%] p-2 transition-all hover:bg-[#404053]">
          <PiArrowsClockwise />
        </button>
        <button className="rounded-[50%] p-2 transition-all hover:bg-[#404053]">
          <PiShuffle />
        </button>
        <div
          className="relative rounded-[50%] p-2 transition-all hover:bg-[#404053]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showMusicControl && <MusicControl />}
          <PiSpeakerHigh />
        </div>
        <button className="rounded-[50%] p-2 transition-all hover:bg-[#404053]">
          <PiSliders />
        </button>
        <button className="rounded-[50%] p-2 text-green-500 transition-all hover:bg-[#404053]">
          <PiWaveform />
        </button>
      </div>
      <div className="h-7 w-[1px] bg-white"></div>
      <button className="flex items-center gap-2 rounded p-2">
        <div className="text-base">
          <PiQueue />
        </div>
        <div>Reproduciendo</div>
      </button>
    </div>
  );
}
