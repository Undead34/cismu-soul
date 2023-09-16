import { PiPlayFill, PiPauseFill, PiSkipBackFill, PiSkipForwardFill } from "react-icons/pi";
import { useMusicPlayer } from "../MusicPlayer/useMusicPlayer";
import { useState, useEffect } from "react";

export default function PlayingBarButtons() {
  const musicPlayer = useMusicPlayer();
  const [paused, setPaused] = useState(musicPlayer.paused);

  useEffect(() => {
    function onPlayPause() {
      setPaused(musicPlayer.paused);
    }

    musicPlayer.addEventListener("pause", onPlayPause);
    musicPlayer.addEventListener("play", onPlayPause);

    return () => {
      musicPlayer.removeEventListener("pause", onPlayPause);
      musicPlayer.removeEventListener("play", onPlayPause);
    };
  }, []);

  async function togglePause() {
    if (paused) {
      await musicPlayer.play();
    } else {
      musicPlayer.pause();
    }

    setPaused(musicPlayer.paused);
  }

  return (
    <div className="flex items-center justify-center gap-1 text-base text-white">
      <button className="rounded-[50%] p-2 hover:bg-[#404053]">
        <PiSkipBackFill />
      </button>
      <button onClick={togglePause} className="rounded-[50%] p-3 text-2xl hover:bg-[#404053]">
        {paused ? <PiPlayFill /> : <PiPauseFill />}
      </button>
      <button className="rounded-[50%] p-2 hover:bg-[#404053]">
        <PiSkipForwardFill />
      </button>
    </div>
  );
}
